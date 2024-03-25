import React, { useState, useEffect } from "react";
import Counter from "./counter.jsx";

const Home = (props) => {
  const [digito1, setDigito1] = useState(0);
  const [digito2, setDigito2] = useState(0);
  const [digito3, setDigito3] = useState(0);
  const [digito4, setDigito4] = useState(0);
  const [digito5, setDigito5] = useState(0);
  const [digito6, setDigito6] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDigito1((prevDigito1) => {
        let nextDigito1 = prevDigito1 + 1;
        if (nextDigito1 === 10) {
          nextDigito1 = 0;
          setDigito2((prevDigito2) => {
            let nextDigito2 = prevDigito2 + 1;
            if (nextDigito2 === 10) {
              nextDigito2 = 0;
              setDigito3((prevDigito3) => {
                let nextDigito3 = prevDigito3 + 1;
                if (nextDigito3 === 10) {
                  nextDigito3 = 0;
                  setDigito4((prevDigito4) => {
                    let nextDigito4 = prevDigito4 + 1;
                    if (nextDigito4 === 10) {
                      nextDigito4 = 0;
                      setDigito5((prevDigito5) => {
                        let nextDigito5 = prevDigito5 + 1;
                        if (nextDigito5 === 10) {
                          nextDigito5 = 0;
                          setDigito6((prevDigito6) => {
                            let nextDigito6 = prevDigito6 + 1;
                            if (nextDigito6 === 10) {
                              nextDigito6 = 0;
                            }
                            return nextDigito6;
                          });
                        }
                        return nextDigito5;
                      });
                    }
                    return nextDigito4;
                  });
                }
                return nextDigito3;
              });
            }
            return nextDigito2;
          });
        }
        return nextDigito1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Counter
        digitOne={digito1}
        digitTwo={digito2}
        digitThree={digito3}
        digitFour={digito4}
        digitFive={digito5}
        digitSix={digito6}
      />
    </>
  );
};

export default Home;

