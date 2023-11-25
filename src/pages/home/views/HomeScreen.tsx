import NavBar from "../../../common/components/nav/NavBar";
import Intro from "./components/Intro";
import Brands from "./components/Brands";
import About from "./components/About";
import Footer from "../../../common/components/footer/Footer";
import Recipies from "./components/Recipies";
import BrandPopUp from "./components/BrandPopUp";
import { useEffect, useState } from "react";
import Assets from "../../../assets";
import { useLocation } from "react-router-dom";
import { Recipe } from "../../../App";
interface Props {
  recipes: Recipe[];
}
const HomeScreen = ({ recipes }: Props) => {
  const location = useLocation();
  const [type, setType] = useState<number>(1);
  const brands = [
    [
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description:
          "Our stirred yoghurt natural variant is plain with no added sugar which makes it best for people who are on a low sugar diet. This yoghurt can be enjoyed as is or with mixed nut toppings and fresh fruits of your choice. It can also be used as an ingredient to prepare several delicious recipes at home. Savor every scoop of Farmfresh stirred yoghurt and have a tasty experience. It comes in a tray of 6 cups either in 200g or 100g cup sizes.",
        duration: 676,
        ingredients: [
          "Partly skimmed cow’s milk, Stabilizer, Lactic acid culture",
        ],
        steps: "",
        title: "Natural",
        imageUrl: "",
        videoUrl: "",
      },

      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
      Our stirred yoghurt strawberry variant has a delicious taste and can be
enjoyed by both children and adults. As with all our other variants it is best
enjoyed chilled. You can enjoy the delicious taste of strawberries with all
the beneﬁts of yogurt.
Our Strawberry stirred yogurt is a good source of protein, calcium, and
probiotics. It is also low in fat and calories, making it a healthy choice for
people of all ages.It comes in a tray of 6 cups either in 200g or 100g cup
sizes.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Partly skimmed cow’s milk, Strawberry, Stabilizer, Lactic acid culture, Colouring (E129)",
        ],
        steps: "",
        imageUrl: "",
        title: "Strawberry",
        videoUrl: "",
      },
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
      Pineapple set yogurt is also versatile and delicious. It can be enjoyed
on its own, or it can be used in a variety of recipes, such as
smoothies, parfaits, and desserts of your choice. It can also be used
as an ingredient to prepare several delicious recipes at home. Savor
every scoop of Farmfresh stirred yoghurt and have a tasty
experience. It comes in a tray of 6 cups either in 200g or 100g cup
sizes.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Partly skimmed cow’s milk, Pineapple, Stabilizer, Lactic acid culture, Colouring (E102)",
        ],
        steps: "",
        imageUrl: "",
        title: "Pineapple",
        videoUrl: "",
      },
    ],
    [
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
          Whether enjoyed as a quick and easy breakfast in your coffee,cereal or tea
or as baking recipes for a richer and creamier ﬂavor, our full cream milk is a
delicious and nutritious beverage that can be enjoyed by people of all ages.
It comes in 1L pack size.
          `,
        ingredients: ["Fresh cow’s milk"],
        steps: "",
        title: "Full Cream Milk",
        imageUrl: "",
        videoUrl: "",
      },
    ],
    [
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
         Our Farmfresh yoghurt banana variant is made with fresh ripe banana
fruits. With this variant, you can almost feel like you’re savoring a real
banana. Whether you’re having it from a glass or sipping it with a straw, the
magical blend of fresh ripe banana and yoghurt provides a delicious creamy
taste that leaves you craving for more. It comes in 1L, 500ml and 250ml
pack sizes.
          `,
        ingredients: [
          "Pasteurized cow’s milk, Sugar, Stabiliser, Natural ﬂavouring, Lactic acid culture, Natural colouring",
        ],
        steps: "",
        title: "Banana",
        imageUrl: "",
        videoUrl: "",
      },

      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
Our Farmfresh yoghurt strawberry variant, made with fresh strawberry
fruits, has an irresistible yummy taste that is sure to excite your taste buds
and leave you craving for more. Strawberry fruit contains essential
vitamins and minerals which makes Farmfresh strawberry yoghurt a healthy
yoghurt drink for your healthy lifestyle. It comes in 1L, 500ml and 250ml
pack sizes.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Pasteurized cow’s milk, Sugar, Stabiliser, Natural ﬂavouring, Lactic acid culture, Natural colouring",
        ],
        steps: "",
        imageUrl: "",
        title: "Strawberry",
        videoUrl: "",
      },
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
You can’t help but love our Farmfresh yoghurt vanilla variant with its
delicious and creamy taste. This premium quality yoghurt drink can
be enjoyed as a snack, desert or a meal. It comes in 1L, 500ml and
250ml pack sizes.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Pasteurized cow’s milk, Sugar, Stabiliser, Natural ﬂavouring, Lactic acid culture, Natural colouring",
        ],
        steps: "",
        imageUrl: "",
        title: "Vanilla",
        videoUrl: "",
      },
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
Our sweetened Farmfresh yoghurt as the name implies is a very tasty, yet
healthy snack. You can enjoy sweetness that is also healthy for your body.
With its delicious taste, you can also enjoy this drinking yoghurt with mixed
nuts, biscuits, fruits or any other preferred toppings. It comes in 1L, 500ml
and 250ml pack sizes.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Pasteurized cow’s milk, Sugar, Stabiliser, Lactic acid culture",
        ],
        steps: "",
        imageUrl: "",
        title: "Sweetened",
        videoUrl: "",
      },
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
Our unsweetened yoghurt is plain with no added sugar which makes it best
for people who are on a low sugar diet. This yoghurt can be enjoyed as is or
with mixed nut toppings and fresh fruits of your choice. It can also be used
as an ingredient to prepare several delicious recipes at home. Savor every
glass of yoghurt and have a tasty experience. It comes in 1L, 500ml and
250ml pack sizes.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Pasteurized cow’s milk, Sugar, Stabiliser,Lactic acid culture",
        ],
        steps: "",
        imageUrl: "",
        title: "Unsweetened",
        videoUrl: "",
      },
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
Do your taste buds a ﬂavor with our Farmfresh yoghurt pineapple
variant. Get that fresh fruity taste with every sip that guarantees
awesome health beneﬁts and high nutritional value. Farmfresh
pineapple yoghurt is made with fresh ripe pineapple fruits. You can
taste the fresh pineapple with every sip.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Pasteurized cow’s milk, Sugar, Stabiliser, Natural ﬂavouring, Lactic acid culture, Natural colouring",
        ],
        steps: "",
        imageUrl: "",
        title: "Pineapple",
        videoUrl: "",
      },
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
Mango lovers love our Farmfresh yoghurt mango variant which is
made with fresh mango fruits. With this variant, you can always have
your mango ﬁx even when mango is out of season.
      `,
        // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
        duration: 676,
        ingredients: [
          "Pasteurized cow’s milk, Sugar, Stabiliser, Natural ﬂavouring, Lactic acid culture, Natural colouring",
        ],
        steps: "",
        imageUrl: "",
        title: "Mango",
        videoUrl: "",
      },
    ],
    [
      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
        Savor the perfect blend of rich, creamy Greek yoghurt complemented by a
touch of natural sweetness. Crafted with care, this indulgent treat strikes a
balance between delightful flavor and nourishing goodness. Whether
enjoyed as a wholesome snack or incorporated into your favorite recipes,
Farmfresh Sweetened Greek Yoghurt adds a touch of luxury to your daily
routine. Experience the joy of a satisfying and nourishing delight that’s
ready to enhance your culinary adventures and promote a balanced
lifestyle.It comes in 400g Tub size.
          `,
        ingredients: ["Fresh cow’s milk"],
        steps: "",
        title: "Sweetened Greek Yoghurt",
        imageUrl: "",
        videoUrl: "",
      },

      {
        _id: Math.floor(Math.random() * 99999).toString(),
        category: "farmfresh",
        description: `
Elevate your taste experience with this wholesome delight that’s crafted to
perfection. Our Greek yoghurt stands as a true embodiment of quality,
made without any added sugars for a pure, authentic flavor. Indulge in the
creamy richness and smooth texture that Farmfresh brings to every
spoonful. Packed with natural goodness, this yoghurt offers a versatile
foundation for your culinary creations and healthy lifestyle. Whether
enjoyed on its own or as a versatile ingredient, Farmfresh Unsweetened
Greek Yoghurt is your go-to choice for a guilt-free, delicious treat that’s both
nourishing and delightful.It comes in 400g Tub size.
          `,
        ingredients: ["Fresh cow’s milk"],
        steps: "",
        title: "Unsweetened Greek Yoghurt",
        imageUrl: "",
        videoUrl: "",
      },
    ],
  ];

  const images = [
    [
      [
        Assets.StirredBrand.natural.StiredNaturalOne,
        Assets.StirredBrand.natural.StiredNaturalTwo,
        Assets.StirredBrand.natural.StiredNaturalThree,
        Assets.StirredBrand.natural.StiredNaturalFour,
        Assets.StirredBrand.natural.StiredNaturalFive,
      ],

      [
        Assets.StirredBrand.strawberry.StiredStrawberryOne,
        Assets.StirredBrand.strawberry.StiredStrawberryTwo,
        Assets.StirredBrand.strawberry.StiredStrawberryThree,
        Assets.StirredBrand.strawberry.StiredStrawberryFour,
        Assets.StirredBrand.strawberry.StiredStrawberryFive,
      ],
      [
        Assets.StirredBrand.pineapple.StiredPineappleOne,
        Assets.StirredBrand.pineapple.StiredPineappleTwo,
        Assets.StirredBrand.pineapple.StiredPineappleThree,
        Assets.StirredBrand.pineapple.StiredPineappleFour,
        Assets.StirredBrand.pineapple.StiredPineappleFive,
      ],
    ],
    [
      [
        Assets.MilkBrand.natural.MilkNaturalOne,
        Assets.MilkBrand.natural.MilkNaturalTwo,
        Assets.MilkBrand.natural.MilkNaturalThree,
      ],
    ],
    [
      [
        Assets.DrinkingYoghourtBrand.banana.DrinkingYoghourtBananaOne,
        Assets.DrinkingYoghourtBrand.banana.DrinkingYoghourtBananaTwo,
        Assets.DrinkingYoghourtBrand.banana.DrinkingYoghourtBananaThree,
        Assets.DrinkingYoghourtBrand.banana.DrinkingYoghourtBananaFour,
        Assets.DrinkingYoghourtBrand.banana.DrinkingYoghourtBananaFive,
      ],

      [
        Assets.DrinkingYoghourtBrand.strawberry.DrinkingYoghourtStrawberryOne,
        Assets.DrinkingYoghourtBrand.strawberry.DrinkingYoghourtStrawberryTwo,
        Assets.DrinkingYoghourtBrand.strawberry.DrinkingYoghourtStrawberryThree,
        Assets.DrinkingYoghourtBrand.strawberry.DrinkingYoghourtStrawberryFour,
        Assets.DrinkingYoghourtBrand.strawberry.DrinkingYoghourtStrawberryFive,
      ],
      [
        Assets.DrinkingYoghourtBrand.vanilla.DrinkingYoghourtVanillaOne,
        Assets.DrinkingYoghourtBrand.vanilla.DrinkingYoghourtVanillaTwo,
        Assets.DrinkingYoghourtBrand.vanilla.DrinkingYoghourtVanillaThree,
      ],
      [
        Assets.DrinkingYoghourtBrand.sweetened.DrinkingYoghourtSweetenedOne,
        Assets.DrinkingYoghourtBrand.sweetened.DrinkingYoghourtSweetenedTwo,
        Assets.DrinkingYoghourtBrand.sweetened.DrinkingYoghourtSweetenedThree,
      ],
      [
        Assets.DrinkingYoghourtBrand.unsweetened.DrinkingYoghourtUnSweetenedOne,
        Assets.DrinkingYoghourtBrand.unsweetened.DrinkingYoghourtUnSweetenedTwo,
        Assets.DrinkingYoghourtBrand.unsweetened
          .DrinkingYoghourtUnSweetenedThree,
      ],
      [
        Assets.DrinkingYoghourtBrand.pineapple.DrinkingYoghourtPineappleOne,
        Assets.DrinkingYoghourtBrand.pineapple.DrinkingYoghourtPineappleTwo,
        Assets.DrinkingYoghourtBrand.pineapple.DrinkingYoghourtPineappleThree,
        Assets.DrinkingYoghourtBrand.pineapple.DrinkingYoghourtPineappleFour,
        Assets.DrinkingYoghourtBrand.pineapple.DrinkingYoghourtPineappleFive,
      ],
      [
        Assets.DrinkingYoghourtBrand.mango.DrinkingYoghourtMangoOne,
        Assets.DrinkingYoghourtBrand.mango.DrinkingYoghourtMangoTwo,
        Assets.DrinkingYoghourtBrand.mango.DrinkingYoghourtMangoThree,
        Assets.DrinkingYoghourtBrand.mango.DrinkingYoghourtMangoFour,
        Assets.DrinkingYoghourtBrand.mango.DrinkingYoghourtMangoFive,
      ],
    ],
    [[Assets.Tesla.TeslaSweetened], [Assets.Tesla.TeslaUnsweetened]],
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const scrollToHash = (hash: string) => {
    const blogElement = document.getElementById(
      hash.split("").slice(1).join("")
    );
    if (blogElement) {
      window.scrollTo({
        behavior: "smooth",
        top: blogElement.offsetTop,
      });
    }
  };
  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);
  return (
    <div>
      <NavBar activeTab="Home" />
      <div className="mt-[4.5rem] -z-50 relative md:h-[80vh] h-[50vh] bg-primary">
        <Intro />
      </div>
      <div className="bg-white h-16 z-50"></div>
      <BrandPopUp
        onTap={(index: number) => {
          setCurrentIndex(index);
        }}
        ingredients={brands[type - 1][currentIndex].ingredients}
        currentIndex={currentIndex}
        onClose={() => setOpenModal(false)}
        content={brands[type - 1][currentIndex].description}
        images={images[type - 1][currentIndex]}
        title={brands[type - 1][currentIndex].title}
        titles={brands[type - 1].map((mp) => mp.title)}
        open={openModal}
      />
      <Brands
        onTap={(type: number) => {
          if (type) {
            setCurrentIndex(0);
            setType(type);
            setOpenModal(true);
          }
        }}
      />
      <Recipies recipes={recipes} />;
      <About />
      <Footer />
    </div>
  );
};

export default HomeScreen;
