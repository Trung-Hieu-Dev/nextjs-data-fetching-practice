function UserDetail(props) {
  return <h1>{props.userId}</h1>;
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const id = params.uid;

  return {
    props: {
      userId: "user-id" + id,
    },
  };
}

export default UserDetail;
