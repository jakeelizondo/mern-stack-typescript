import React, { useState, useEffect } from "react";
import { useAppSelector } from "../store/hooks";

import { SomethingService } from "../services/SomethingService";
import Header from "./Header";

type Something = {
  name: string;
};

function Home() {
  const [somethings, setSomethings] = useState<Something[]>([]);

  const somethingService = new SomethingService();
  const somethingValue = useAppSelector((state) => state.something.value);

  useEffect(() => {
    somethingService.getAllSomethings().then((somethings) => {
      console.log(somethings);
      setSomethings(somethings);
    });
  }, [somethingService]);

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
