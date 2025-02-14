import { config, websocketPrefixUrl } from '@affine/env';
import { KeckProvider } from '@affine/workspace/affine/keck';
import {
  getLoginStorage,
  storageChangeSlot,
} from '@affine/workspace/affine/login';
import type { Provider } from '@affine/workspace/type';
import type {
  AffineWebSocketProvider,
  LocalIndexedDBProvider,
} from '@affine/workspace/type';
import type {
  Disposable,
  Workspace as BlockSuiteWorkspace,
} from '@blocksuite/store';
import { assertExists } from '@blocksuite/store';
import {
  createIndexedDBProvider as create,
  EarlyDisconnectError,
} from '@toeverything/y-indexeddb';

import { createBroadCastChannelProvider } from './broad-cast-channel';
import { localProviderLogger } from './logger';

const createAffineWebSocketProvider = (
  blockSuiteWorkspace: BlockSuiteWorkspace
): AffineWebSocketProvider => {
  let webSocketProvider: KeckProvider | null = null;
  let dispose: Disposable | undefined = undefined;
  const apis: AffineWebSocketProvider = {
    flavour: 'affine-websocket',
    background: false,
    cleanup: () => {
      assertExists(webSocketProvider);
      webSocketProvider.destroy();
      webSocketProvider = null;
      dispose?.dispose();
    },
    connect: () => {
      dispose = storageChangeSlot.on(() => {
        apis.disconnect();
        apis.connect();
      });
      webSocketProvider = new KeckProvider(
        websocketPrefixUrl + '/api/sync/',
        blockSuiteWorkspace.id,
        blockSuiteWorkspace.doc,
        {
          params: { token: getLoginStorage()?.token ?? '' },
          // @ts-expect-error ignore the type
          awareness: blockSuiteWorkspace.awarenessStore.awareness,
          // we maintain broadcast channel by ourselves
          disableBc: true,
          connect: false,
        }
      );
      localProviderLogger.info('connect', webSocketProvider.url);
      webSocketProvider.connect();
    },
    disconnect: () => {
      assertExists(webSocketProvider);
      localProviderLogger.info('disconnect', webSocketProvider.url);
      webSocketProvider.destroy();
      webSocketProvider = null;
      dispose?.dispose();
    },
  };

  return apis;
};

const createIndexedDBProvider = (
  blockSuiteWorkspace: BlockSuiteWorkspace
): LocalIndexedDBProvider => {
  const indexeddbProvider = create(
    blockSuiteWorkspace.id,
    blockSuiteWorkspace.doc
  );
  const callbacks = new Set<() => void>();
  return {
    flavour: 'local-indexeddb',
    callbacks,
    // fixme: remove background long polling
    background: true,
    cleanup: () => {
      // todo: cleanup data
    },
    connect: () => {
      localProviderLogger.info(
        'connect indexeddb provider',
        blockSuiteWorkspace.id
      );
      indexeddbProvider.connect();
      indexeddbProvider.whenSynced
        .then(() => {
          callbacks.forEach(cb => cb());
        })
        .catch(error => {
          if (error instanceof EarlyDisconnectError) {
            return;
          } else {
            throw error;
          }
        });
    },
    disconnect: () => {
      assertExists(indexeddbProvider);
      localProviderLogger.info(
        'disconnect indexeddb provider',
        blockSuiteWorkspace.id
      );
      indexeddbProvider.disconnect();
    },
  };
};

export {
  createAffineWebSocketProvider,
  createBroadCastChannelProvider,
  createIndexedDBProvider,
};

export const createLocalProviders = (
  blockSuiteWorkspace: BlockSuiteWorkspace
): Provider[] => {
  return (
    [
      config.enableBroadCastChannelProvider &&
        createBroadCastChannelProvider(blockSuiteWorkspace),
      config.enableIndexedDBProvider &&
        createIndexedDBProvider(blockSuiteWorkspace),
    ] as any[]
  ).filter(v => Boolean(v));
};
