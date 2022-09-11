import React from 'react';
import Pagination from '.';
import { render } from '../../test/utils';

describe('<Pagination />', () => {
  const paginationData = {
    currentPage: 2,
    pageTotal: 100,
  };
  it('renders without error', () => {
    const { getByTestId } = render(<Pagination {...paginationData} />);
    expect(getByTestId('pagination')).toBeInTheDocument();
  });

  it('renders the correct currentPage', () => {
    const { getByTestId } = render(<Pagination {...paginationData} />);
    expect(getByTestId('current-page')).toHaveTextContent(
      paginationData.currentPage.toString(),
    );
  });

  it('renders the next link', () => {
    const { getByTestId } = render(<Pagination {...paginationData} />);
    expect(getByTestId('next-link')).toBeInTheDocument();
  });

  it('renders the previous link', () => {
    const { getByTestId } = render(<Pagination {...paginationData} />);
    expect(getByTestId('previous-link')).toBeInTheDocument();
  });

  it('renders without the previous link on the first page', () => {
    const mockPaginationData = {
      ...paginationData,
      currentPage: 1,
    };
    const { queryByTestId } = render(<Pagination {...mockPaginationData} />);
    expect(queryByTestId('previous-link')).not.toBeInTheDocument();
  });

  it('renders without the next link on the last page', () => {
    const mockPaginationData = {
      ...paginationData,
      currentPage: 100,
    };
    const { queryByTestId } = render(<Pagination {...mockPaginationData} />);
    expect(queryByTestId('next-link')).not.toBeInTheDocument();
  });

  it('renders links only down to 1', () => {
    const mockPaginationData = {
      ...paginationData,
    };
    const { getByRole, queryByRole } = render(
      <Pagination {...mockPaginationData} />,
    );
    expect(
      getByRole('link', {
        name: '1',
      }),
    ).toBeInTheDocument();
    expect(
      queryByRole('link', {
        name: '0',
      }),
    ).not.toBeInTheDocument();
  });

  it('renders links down to currentPage - 5', () => {
    const mockPaginationData = {
      ...paginationData,
      currentPage: 7,
    };
    const { getByRole, queryByRole } = render(
      <Pagination {...mockPaginationData} />,
    );
    expect(
      getByRole('link', {
        name: '2',
      }),
    ).toBeInTheDocument();
    expect(
      queryByRole('link', {
        name: '1',
      }),
    ).not.toBeInTheDocument();
  });

  it('renders links only up to the page total', () => {
    const mockPaginationData = {
      ...paginationData,
      pageTotal: 7,
    };
    const { getByRole, queryByRole } = render(
      <Pagination {...mockPaginationData} />,
    );
    expect(
      getByRole('link', {
        name: mockPaginationData.pageTotal.toString(),
      }),
    ).toBeInTheDocument();
    expect(
      queryByRole('link', {
        name: (mockPaginationData.pageTotal + 1).toString(),
      }),
    ).not.toBeInTheDocument();
  });
});
