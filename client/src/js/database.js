import { openDB } from "idb";
import "regenerator-runtime/runtime";

export const initdb = async () => {
  //create a new database using version 1
  openDB("contact_db", 1, {
    //add our database schema if it has not already been init
    upgrade(db) {
      if (db.objectStoreNames.contains("contacts")) {
        console.log("contacts store already exists");
        return;
      }
      //create a new object store for data and give it 'id' as a key name, which will auto increment
      db.createObjectStore("contacts", { keyPath: "id", autoIncrement: true });
      console.log("comtacts store created");
    },
  });
};
