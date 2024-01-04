import { remoteImport } from '../remoteImport/remoteImport';

interface RemoteModuleProps {
  props: Record<string, any>;
}

export const handleRemoteModules = async (
  remoteModules: string[],
  ctx: Record<string, any>
): Promise<RemoteModuleProps> => {
  for (const remoteModulePath of remoteModules) {
    const remoteProps = await remoteImport(remoteModulePath);

    if (remoteProps && remoteProps.getServerSideProps) {
      return remoteProps.getServerSideProps(ctx);
    }
  }

  return {
    props: {}
  };
};