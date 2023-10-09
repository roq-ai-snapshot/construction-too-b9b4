import queryString from 'query-string';
import { ProductInterface, ProductGetQueryInterface } from 'interfaces/product';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';
import { convertQueryToPrismaUtil, getOrderByOptions } from 'lib/utils';
import { fetcher } from 'lib/api-fetcher';

export const getProducts = async (
  query: ProductGetQueryInterface = {},
): Promise<PaginatedInterface<ProductInterface>> => {
  const { offset: skip, limit: take, order, ...restQuery } = query;
  const pagination = {
    skip,
    take,
  };
  const params = convertQueryToPrismaUtil(restQuery, 'product');
  const [response, count] = await Promise.all([
    fetcher(
      '/api/model/product/findMany',
      {},
      {
        ...params,
        ...pagination,
        ...(order && {
          orderBy: getOrderByOptions(order),
        }),
      },
    ),
    fetcher('/api/model/product/count', {}, { where: params.where }),
  ]);
  return {
    ...response,
    totalCount: count.data,
  };
};

export const createProduct = async (product: ProductInterface) => {
  return fetcher('/api/model/product', { method: 'POST', body: JSON.stringify({ data: product }) });
};

export const updateProductById = async (id: string, product: ProductInterface) => {
  return fetcher('/api/model/product/update', {
    method: 'PUT',
    body: JSON.stringify({
      where: {
        id,
      },
      data: product,
    }),
  });
};

export const getProductById = async (id: string, query: GetQueryInterface = {}) => {
  const { relations = [] } = query;
  const response = await fetcher(
    '/api/model/product/findFirst',
    {},
    {
      where: {
        id,
      },
      include: relations.reduce((acc, el) => ({ ...acc, [el.split('.')[0]]: true }), {}),
    },
  );
  return response.data;
};

export const deleteProductById = async (id: string) => {
  return fetcher(
    '/api/model/product/delete',
    { method: 'DELETE' },
    {
      where: {
        id,
      },
    },
  );
};
