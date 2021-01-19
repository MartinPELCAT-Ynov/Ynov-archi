import { AbstractCreator } from "./creators/AbstractCreator";
import { DressCreator } from "./creators/DressCreator";
import { ShirtCreator } from "./creators/ShirtCreator";
import { ShortCreator } from "./creators/ShortCreator";

const clothesArray: AbstractCreator[] = [
  new DressCreator(),
  new ShirtCreator(),
  new ShortCreator(),
];

clothesArray.forEach((clothes) => {
  console.log(clothes.getSize());
});
