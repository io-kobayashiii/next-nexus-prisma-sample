import { useUsersQuery } from '../../generated/graphql';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';

type Props = {
  className?: string;
};

export const ReadUsers = ({ className }: Props) => {
  const [{ data, error, fetching }] = useUsersQuery();
  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'id',
        headerName: 'ID',
        width: 80,
      },
      {
        field: 'name',
        headerName: '名前',
        flex: 1,
      },
      {
        field: 'email',
        headerName: 'メールアドレス',
        flex: 1,
      },
      {
        field: 'createdAt',
        headerName: '作成日時',
        width: 150,
      },
      {
        field: 'updatedAt',
        headerName: '更新日時',
        width: 150,
      },
    ];
  }, []);
  return (
    <>
      <div className={`${className ?? ''} bg-gray-800 rounded-8 p-30`}>
        <h2 className={'text-20 font-bold'}>Read</h2>
        {data?.users && (
          <DataGrid
            className={'mt-20 border-0'}
            sx={{
              '.MuiDataGrid-columnSeparator': {
                display: 'none',
              },
            }}
            columns={columns}
            rows={data.users.map((user) => ({
              ...user,
              createdAt: new Date(user!.createdAt).toLocaleString(),
              updatedAt: new Date(user!.updatedAt).toLocaleString(),
            }))}
            autoHeight
          />
        )}
      </div>
    </>
  );
};

export default ReadUsers;
