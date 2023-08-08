const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      <div>
        <img
          src='/assets/img.jpeg'
          width={300}
          height={450}
          alt='이미지 원본'
        />
        <p style={{ fontSize: '20px' }}>이미지 원본 3,024*4,032 4.3MB</p>
      </div>
      <img
        src='/assets/img-300.jpg'
        width={300}
        height={450}
        alt='이미지 사이즈 조정'
      />
      <p style={{ fontSize: '20px' }}>이미지 사이즈 조정 300*450 30.6KB</p>
    </div>
  );
};

export default App;
