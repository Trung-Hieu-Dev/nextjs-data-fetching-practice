function UserProfilePage({ username }) {
  return <h1>{username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(ctx) {
  return {
    props: {
      username: "Max",
    },
  };
}
