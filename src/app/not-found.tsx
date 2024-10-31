const NotFound = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '0',
        top:'0',
        zIndex: '-1',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        width: '100vw',
      }}
    >
      <h1>Страница не найдена</h1>
    </div>
  );
}

export default NotFound;