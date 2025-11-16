const useState = (value: string) => {
  return [
    value,
    (value2: string):void => {
      console.log(value2);
    },
  ] as const;
};


const [initVal, printName] = useState('Fabio');

console.log(initVal);
printName('Levi');



