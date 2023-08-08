const App = () => {
  return (
    <div>
      <img
        srcSet='/assets/sam-300w.png 300w, /assets/sam-600w.png 600w, /assets/sam-900w.png 900w'
        sizes='(max-width: 300px) 300px, (max-width: 600px) 600px, (max-width: 900px) 900px'
        src='/assets/sam-900w.png'
        alt='펀잇 삼김이'
      />
    </div>
  );
};

export default App;
