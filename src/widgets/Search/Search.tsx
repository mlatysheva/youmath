import { useState } from "react";
import classes from "./Search.module.scss";
import { InputSearch } from '../../shared/ui/InputSearch/InputSearch';


export const Search = () => {

  const [value] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change', event.target.value);
  };

  const onSearch = (searchTerm: string) => {
    console.log("search", searchTerm);
  };

  return (
    <div className={classes.Container}>
      <InputSearch
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        className={classes.input}
        placeholder="Введите категорию"
      />
    </div>
  );
};
