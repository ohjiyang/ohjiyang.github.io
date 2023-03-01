const App = () => {
  return (
    <div>
      <section className="header">
        <div className="header__container __container">
          <div className="header__body">header</div>
        </div>
      </section>
      <section className="page">
        <div className="page__container __container">
          <div className="page__body">main</div>
        </div>
      </section>
      <section className="footer">
        <div className="footer__container __container">
          <div className="footer__body">footer</div>
        </div>
      </section>
    </div>
  );
};

const container = document.querySelector("#root");
ReactDOM.render(<App />, container);
