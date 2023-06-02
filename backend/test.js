const all = [
  {
    name: "afg",
    id: 1,
    owner: "ww",
  },
  {
    name: "afg 2",
    id: 2,
    owner: "www",
  },
  {
    name: "afg 3",
    id: 3,
    owner: "ww",
  },
  {
    name: "afg 4",
    id: 4,
    owner: "www",
  },
];

let res = all.filter(
  (e) => e !== all[all.findIndex((e) => e.id === 1 && e.owner === "ww")]
);
console.log(res);
