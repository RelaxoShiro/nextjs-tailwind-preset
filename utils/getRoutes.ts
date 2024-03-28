// utils/getRoutes.ts
import { GetStaticPaths } from 'next';

export const getRoutes: GetStaticPaths = async () => {
  // @ts-ignore
  const pages = require.context('../pages', true, /\.tsx$/);
  const pageFiles = pages.keys();

  const routes = pageFiles
    .filter((file: string | string[]) => !file.includes('/_'))
    .map((file: string) => {
      const name = file.replace(/^.*[\\/]/, '').replace(/\..+$/, '');
      const path = `/${name === 'index' ? '' : name}`;
      return { name, path };
    });

  return { paths: routes, fallback: false };
};
