interface RemoteImportProps {
  getServerSideProps?: (
    ctx: Record<string, any>
  ) => Promise<{ props: Record<string, any> }>;
}

export const remoteImport = async (remoteModulePath: string): Promise<RemoteImportProps | null> => {
  try {
    const remoteComponent = await import(remoteModulePath);
    return remoteComponent || null;
  } catch (error) {
    console.error(`Error importing remote module ${remoteModulePath}:`, error);
    return null;
  }
};