import React, { useState, useEffect } from "react";
import { useAppSelector } from "../store/hooks";

import SomethingService from "../services/SomethingService";
import Header from "./Header";

type Something = {
  name: string;
};

function Home() {
  const [somethings, setSomethings] = useState<Something[]>([]);

  const somethingValue = useAppSelector((state) => state.something.value);

  useEffect(() => {
    SomethingService.getAllSomethings().then((somethings) => {
      console.log(somethings);
      setSomethings(somethings);
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      Hello here are some somethings:
      {(somethings ?? []).map((something) => (
        <p key={something?.name}>{something?.name}</p>
      ))}
      SomethingValue: {somethingValue}
    </div>
  );
}

export default Home;
