export const data = [
  //Notebook
  {
    id: 1,
    name: "Notebook ASUS ROG ZEPHYRUS 14",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26535_Notebook_ASUS_ROG_ZEPHYRUS_14__WQHD_RYZEN_9_4900HS_16GB_1TB_SSD_NVMe_RTX_2060_b8ffd6ee-grn.jpg",
    price: 320000,
    stock: 7,
  },
  {
    id: 2,
    name: "Notebook ASUS X512 15.6",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28759_Notebook_ASUS_X512_15.6__I3_1005G1_4GB_1TB_HDD_W10_ESP_42e6a0f9-grn.jpg",
    price: 77000,
    stock: 6,
  },
  {
    id: 3,
    name: "Notebook DELL Latitude 3410 14",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29203_Notebook_DELL_Latitude_3410_14__I5_10210U_8GB_1TB_HDD_W10_Pro_d283f3d2-grn.jpg",
    price: 105000,
    stock: 12,
  },
  {
    id: 4,
    name: "Notebook HP 240 14",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25750_Notebook_HP_240_14__Core_i3_1005G1_4GB_1TB_HDD_FreeDos_c10eb7eb-grn.jpg",
    description: "La notebook HP 240 G7 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
    price: 80000,
    stock: 4,
  },
  {
    id: 5,
    name: "Notebook XPG XENIA 14",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29955_Notebook_XPG_XENIA_14__I5_1135G7_16GB_512GB_SSD_NVMe_W10_Home_6b625de5-grn.jpg",
    price: 145000,
    stock: 4,
  },
  {
    id: 6,
    name: "Notebook Gamer Gigabyte G5 15.6",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30118_Notebook_Gamer_Gigabyte_G5_15.6__i5_11400H_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_Freedos_60ece8d4-grn.jpg",
    price: 210000,
    stock: 9,
  },
  {
    id: 7,
    name: "Notebook NSX Epsilon 14",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30348_Notebook_NSX_Epsilon_14__Celeron_J4005_8GB_256GB_SSD_W10_Home_c4ed30d6-grn.jpg",
    price: 55900,
    stock: 7,
  },
  {
    id: 8,
    name: "Notebook ASUS UX5401 14",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30592_Notebook_ASUS_UX5401_14__I5_1135G7_8GB_512GB_SSD_OLED_W10_f059b8fd-grn.jpg",
    price: 190000,
    stock: 11,
  },
  {
    id: 9,
    name: "Notebook Gamer ASUS TUF F15 15.6",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30586_Notebook_Gamer_ASUS_TUF_F15_15.6__I5_11400H_16GB__2x8GB__512GB_SSD_NVMe_RTX_3050_144Hz_Freedos_39c78a50-grn.jpg",
    price: 210000,
    stock: 4,
  },
  {
    id: 10,
    name: "Notebook ASUS ZenBook DUO TOUCH UX482 14",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30572_Notebook_ASUS_ZenBook_DUO_TOUCH_UX482_14__I7_1165G7_16GB_1TB_SSD_NVMe_MX450_Screen_Pad_PLUS_12.65__W10_edf29905-grn.jpg",
    price: 290000,
    stock: 6,
  },
];

export const getProductId = (id) =>{
  return new Promise ((resolve,reject) => {
      setTimeout(() => {
          if(data.length>0){
              resolve(data.find(prod => prod.id === parseInt(id)))}
          else{
              reject("")
          } 
      }, 1500);
  })
}
