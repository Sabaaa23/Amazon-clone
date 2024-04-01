import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng")
      : "en",
    resources: {
      en: {
        translation: {
          delivery: "Deliver to",
          deliveryCountry: "Georgia",
          signIn: "Hello,sign in",
          Account: "Accounts & Lists",
          signOut: "Sign out",
          return: "Returns",
          orders: "& Orders",
          cart: "Cart",
          all: "All",
          deals: "Today's Deals",
          service: "Customer Service",
          registry: "Registry",
          giftCard: "Gift Cards",
          sell: "Sell",
          titleSide1: "Digital Content & Devices",
          titleSide2: "Shop By Department",
          titleSide3: "Programs & Features",
          titleSide4: "Help & Settings",
          col11: "Amazon Music",
          col12: "Kindle E-readers & Books",
          col13: "Amazon Appstore",
          col21: "Electronics",
          col22: "Computers",
          col23: "Smart Home",
          col31: "Gift Cards",
          col32: "Amazon Live",
          col33: "Internation Shopping",
          col41: "Your Account",
          col42: "Customer Service",
          col43: "Contact Us",
          mlisttitle1: "Get To Know Us",
          mlisttitle2: "Make Money With Us",
          mlisttitle3: "Amazon Payment Products",
          mlisttitle4: "Let Us Help You",
          mlist1i1: "Careers",
          mlist1i2: "Blog",
          mlist1i3: "About Amazon",
          mlist1i4: "Investor Relations",
          mlist1i5: "Amazon Devices",
          mlist1i6: "Amazon Science",
          mlist2i1: "Sell products on Amazon",
          mlist2i2: "Sell on Amazon Business",
          mlist2i3: "Sell apps on Amazon",
          mlist2i4: "Become an Affiliate",
          mlist2i5: "Advertise Your Products",
          mlist2i6: "Self-Publish with Us",
          mlist2i7: "Host an Amazon Hub",
          mlist2i8: "›See More Make Money with Us",
          mlist3i1: "Amazon Business Card",
          mlist3i2: "Shop with Points",
          mlist3i3: "Reload Your Balance",
          mlist3i4: "Amazon Currency Converter",
          mlist4i1: "Amazon and COVID-19",
          mlist4i2: "Your Account",
          mlist4i3: "Your Orders",
          mlist4i4: "Shipping Rates & Policies",
          mlist4i5: "Returns & Replacements",
          mlist4i6: "Manage Your Content and Devices",
          mlist4i7: "Amazon Assistant",
          mlist4i8: "Help",
          flisttitle1: "Amazon Music",
          flistitem1: "Stream millions of songs",
          flisttitle2: "Amazon Ads",
          flistitem2: "Reach customers wherever they spend their time",
          flisttitle3: "6pm",
          flistitem3: "Score deals on fashion brands",
          flisttitle4: "AbeBooks",
          flistitem4: "Books, art & collectibles",
          flisttitle5: "ACX",
          flistitem5: "Audiobook Publishing Made Easy",
          flisttitle6: "Sell on Amazon",
          flistitem6: "Start a Selling Account",
          flisttitle7: "Amazon Business",
          flistitem7: "Everything For Your Business",
          flisttitle8: "AmazonGlobal",
          flistitem8: "Ship Orders Internationally",
          flisttitle9: "Home Services",
          flistitem9: "Experienced Pros Happiness Guarantee",
          flisttitle10: "Amazon Web Services",
          flistitem10: "Scalable Cloud Computing Services",
          flisttitle11: "Audible",
          flistitem11: "Listen to Books & Original Audio Performances",
          flisttitle12: "Box Office Mojo",
          flistitem12: "Find Movie Box Office Data",
          flisttitle13: "Goodreads",
          flistitem13: "Book reviews & recommendations",
          flisttitle14: "IMDb",
          flistitem14: "Movies, TV & Celebrities",
          flisttitle15: "IMDbPro",
          flistitem15: "Get Info Entertainment Professionals Need",
          flisttitle16: "Kindle Direct Publishing",
          flistitem16: "Indie Digital & Print Publishing Made Easy",
          flisttitle17: "Prime Video Direct",
          flistitem17: "Video Distribution Made Easy",
          flisttitle18: "Shopbop",
          flistitem18: "Designer Fashion Brands",
          flisttitle19: "Woot!",
          flistitem19: "Deals and Shenanigans",
          flisttitle20: "Zappos",
          flistitem20: "Shoes & Clothing",
          flisttitle21: "Ring",
          flistitem21: "Smart Home Security Systems",
          flisttitle22: "eero WiFi",
          flistitem22: "Stream 4K Video in Every Room",
          flisttitle23: "Blink",
          flistitem23: "Smart Security for Every Home",
          flisttitle24: "Neighbors App",
          flistitem24: "Real-Time Crime & Safety Alerts",
          flisttitle25: "Amazon Subscription Boxes",
          flistitem25: "Top subscription boxes – right to your door",
          flisttitle26: "PillPack",
          flistitem26: "Pharmacy Simplified",
          signin: "Sign in",
          emailornumber: "Email or mobile phone number",
          password: "Password",
          continue: "Continue",
          createacc: "Create your Amazon account",
          needhelp: "Need help?",
          agree1: "By continuing, you agree to Amazon's",
          agree2: "Conditions of Use",
          and: "and",
          agree3: "Privacy Notice.",
          newmember: "New to Amazon?",
          conofuse: "Conditions of use",
          privacy: "Privacy Notice",
          help: "Help",
          creator: "© 2024, Amazon.com-clone, Inc. or its affiliates",
          createaccount: "Create account",
          firstname: "First name",
          lastname: "Last name",
          email: "Email ",
          mobilenumber: "Mobile number",
          personalnumber: "Personal number",
          repass: "Re-enter password",
          createagree: "By creating an account, you agree to Amazon's",
          buyforwork: "Buying for work?",
          businessacc: "Create a free business account",
          haveanacc: "Already have an account?",
          recomendations: "See personalized recommendations",
          start: "Start here.",
          emptycart: "Your Amazon Cart is empty",
          emptyorders: "Your Amazon Orders are empty",
          profile: "Your Profile",
          createdate: "Created date:",
          lastupdate: "Last Updated",
          savechanges: "Save Changes",
          wishlist: "Wish List",
          items: "items",
          shoppingcart: "Shopping Cart",
          subtotal: "Subtotal",
          unitprice: "Unit Price",
          quantity: "Quantity",
          delete: "Delete Item",
          clearcart: "Clear Cart",
          exploreship: "Explore with Free Shipping on All Orders!",
          buy: "Proceed to Buy",
          payment: "Secure payment info",
          nameoncard: "Name on card",
          cardnumber: "Card number",
          date: "Expiration date",
          seccode: "Security code",
          pay: "PAY NOW",
          discountedproducts: "Discounted products",
          smartphones: "Smartphones",
          laptops: "Laptops",
          gaming: "Gaming",
          audio: "Audio",
          tv: "TV",
          tablets: "Tablets",
          photo: "Photo",
          productdetails: "Product Details",
          addtocart: "Add to cart",
          goback: "Go back",
          compare: "Compare",
          addtowishlist: "Add to Wish List",
          details: "View Details",
          filter: "Price Filter",
          minprice: "Min Price",
          maxprice: "Max Price",
          brands: "Brands",
          search: "Search",
        },
      },
      ge: {
        translation: {
          delivery: "მიტანა",
          deliveryCountry: "საქართველოში",
          signIn: "შესვლა",
          Account: "ანგარიში და სიები",
          signOut: "გასვლა",
          return: "დაბრუნება",
          orders: "& შეკვეთები",
          cart: "კალათა",
          all: "ყველა",
          deals: "დღევანდელი აქციები",
          service: "Კლიენტების მომსახურება",
          registry: "რეესტრი",
          giftCard: "Სასაჩუქრე ბარათები",
          sell: "გაყიდვა",
          titleSide1: "ციფრული კონტენტი და მოწყობილობები",
          titleSide2: "მაღაზია განყოფილების მიხედვით",
          titleSide3: "პროგრამები და ფუნქციები",
          titleSide4: "დახმარება და პარამეტრები",
          col11: "ამაზონის მუსიკა",
          col12: "ელექტრონული მკითხველები და წიგნები",
          col13: "ამაზონის აპლიკაციების მაღაზია",
          col21: "ელექტრონიკა",
          col22: "კომპიუტერები",
          col23: "ჭკვიანი სახლი",
          col31: "Სასაჩუქრე ბარათი",
          col32: "ცოცხალი ამაზონი",
          col33: "საერთაშორისო ვაჭრობა",
          col41: "თქვენი ანგარიში",
          col42: "Კლიენტების მომსახურება",
          col43: "დაგვიკავშირდით",
          mlisttitle1: "გაგვიცანით",
          mlisttitle2: "იშოვე ფული ჩვენთან ერთად",
          mlisttitle3: "ამაზონის გადახდის პროდუქტები",
          mlisttitle4: "ჩვენ დაგეხმარებით",
          mlist1i1: "კარიერა",
          mlist1i2: "ბლოგი",
          mlist1i3: "ამაზონის შესახებ",
          mlist1i4: "ინვესტორებთან ურთიერთობა",
          mlist1i5: "ამაზონის მოწყობილობები",
          mlist1i6: "ამაზონის მეცნიერება",
          mlist2i1: "გაყიდეთ პროდუქტები ამაზონზე",
          mlist2i2: "გაყიდე ამაზონის ბიზნესზე",
          mlist2i3: "გაყიდეთ აპლიკაციები ამაზონზე",
          mlist2i4: "გახდი წევრი",
          mlist2i5: "განათავსეთ თქვენი პროდუქტების რეკლამა",
          mlist2i6: "თვითგამოქვეყნება ჩვენთან ერთად",
          mlist2i7: "უმასპინძლეთ Amazon Hub-ს",
          mlist2i8: "›იხილეთ მეტი ფულის გამომუშავება ჩვენთან ერთად",
          mlist3i1: "ამაზონის ბიზნეს ბარათი",
          mlist3i2: "იყიდეთ ქულებით",
          mlist3i3: "გადატვირთეთ თქვენი ბალანსი",
          mlist3i4: "ამაზონის ვალუტის გადამყვანი",
          mlist4i1: "Amazon და COVID-19",
          mlist4i2: "თქვენი ანგარიში",
          mlist4i3: "თქვენი შეკვეთები",
          mlist4i4: "მიწოდების ტარიფები და პოლიტიკა",
          mlist4i5: "დაბრუნება და ჩანაცვლება",
          mlist4i6: "მართეთ თქვენი კონტენტი და მოწყობილობები",
          mlist4i7: "ამაზონის ასისტენტი",
          mlist4i8: "დახმარება",
          flisttitle1: "ამაზონის მუსიკა",
          flistitem1: "გაუშვით მილიონობით სიმღერა",
          flisttitle2: "ამაზონის რეკლამები",
          flistitem2: "მიაღწიეთ კლიენტებს იქ, სადაც ისინი ატარებენ დროს",
          flisttitle3: "საღამოს 6",
          flistitem3: "მიიღეთ გარიგებები მოდის ბრენდებზე",
          flisttitle4: "აბეწიგნები",
          flistitem4: "წიგნები, ხელოვნება და კოლექციები",
          flisttitle5: "ეისიიქსი",
          flistitem5: "აუდიოწიგნების გამოცემა მარტივია",
          flisttitle6: "გაყიდვა ამაზონზე",
          flistitem6: "დაიწყეთ გაყიდვის ანგარიში",
          flisttitle7: "ამაზონის ბიზნესი",
          flistitem7: "ყველაფერი თქვენი ბიზნესისთვის",
          flisttitle8: "ამაზონ გლობალი",
          flistitem8: "შეკვეთების გაგზავნა საერთაშორისო დონეზე",
          flisttitle9: "სახლის სერვისები",
          flistitem9: "გამოცდილი პროფესიონალების ბედნიერების გარანტია",
          flisttitle10: "ამაზონის ვებ სერვისები",
          flistitem10: "მასშტაბირებადი ღრუბლოვანი გამოთვლითი სერვისები",
          flisttitle11: "ხმოვანი",
          flistitem11: "მოუსმინეთ წიგნებს და ორიგინალურ აუდიო პერფორმანსებს",
          flisttitle12: "სალარო მოჯო",
          flistitem12: "იპოვეთ ფილმის სალაროების მონაცემები",
          flisttitle13: "გუდრიდსი",
          flistitem13: "წიგნის მიმოხილვები და რეკომენდაციები",
          flisttitle14: "IMDb",
          flistitem14: "ფილმები, ტელევიზია და ცნობილი სახეები",
          flisttitle15: "IMDbპრო",
          flistitem15: "მიიღეთ ინფორმაცია გასართობი პროფესიონალები სჭირდება",
          flisttitle16: "Kindle პირდაპირი გამოცემა",
          flistitem16: "ინდი ციფრული და ბეჭდვითი გამოცემა მარტივია",
          flisttitle17: "პირდაპირი პრაიმ ვიდეო",
          flistitem17: "ვიდეოს გავრცელება მარტივია",
          flisttitle18: "შოპბოპი",
          flistitem18: "დიზაინერების მოდის ბრენდები",
          flisttitle19: "ვუტ!",
          flistitem19: "გარიგებები და შენანიგანები",
          flisttitle20: "ზაპოსი",
          flistitem20: "ფეხსაცმელი და ტანსაცმელი",
          flisttitle21: "ბეჭედი",
          flistitem21: "ჭკვიანი სახლის უსაფრთხოების სისტემები",
          flisttitle22: "ეერო WiFi",
          flistitem22: "გაუშვით 4K ვიდეო ყველა ოთახში",
          flisttitle23: "თვალის დახამხამება",
          flistitem23: "ჭკვიანი უსაფრთხოება ყველა სახლისთვის",
          flisttitle24: "მეზობლების აპლიკაცია",
          flistitem24: "რეალურ დროში დანაშაულისა და უსაფრთხოების გაფრთხილებები",
          flisttitle25: "ამაზონის სააბონენტო ყუთები",
          flistitem25: "საუკეთესო სააბონენტო ყუთები - პირდაპირ თქვენს კართან",
          flisttitle26: "პილპაკი",
          flistitem26: "აფთიაქი გამარტივებული",
          signin: "შესვლა",
          emailornumber: "ელ.ფოსტა ან მობილური ტელეფონის ნომერი",
          password: "პაროლი",
          continue: "გაგრძელება",
          createacc: "შექმენით თქვენი Amazon ანგარიში",
          needhelp: "დახმარება გჭირდება?",
          agree1: "გაგრძელებით თქვენ ეთანხმებით Amazon-ს",
          agree2: "გამოყენების პირობებში",
          and: "და",
          agree3: "კონფიდენციალურობის შეტყობინებაში.",
          newmember: "ახალი ხართ ამაზონში?",
          conofuse: "გამოყენების პირობები",
          privacy: "კონფიდენციალურობის შეტყობინება",
          help: "დახმარება",
          creator:
            "© 2024, Amazon.com-clone, Inc. ან მისი შვილობილი კომპანიები",
          createaccount: "Შექმენი ანგარიში",
          firstname: "სახელი",
          lastname: "გვარი",
          email: "იმეილი",
          mobilenumber: "ტელეფონის ნომერი",
          personalnumber: "პირადი ნომერი",
          repass: "გაიმეორეთ პაროლი",
          createagree: "ანგარიშის შექმნით თქვენ ეთანხმებით Amazon-ს",
          buyforwork: "სამუშაოსთვის ყიდულობთ?",
          businessacc: "შექმენით უფასო ბიზნეს ანგარიში",
          haveanacc: "უკვე გაქვთ ანგარიში?",
          recomendations: "იხილეთ პერსონალიზებული რეკომენდაციები",
          start: "დაიწყეთ აქ.",
          emptycart: "თქვენი Amazon კალათა ცარიელია",
          emptyorders: "თქვენი ამაზონის შეკვეთები ცარიელია",
          profile: "შენი პროფილი",
          createdate: "შექმნის თარიღი",
          lastupdate: "ბოლო განახლება",
          savechanges: "ცვლილებების შენახვა",
          wishlist: "სურვილების სია",
          items: "ნივთი",
          shoppingcart: "Საყიდლების კალათი",
          subtotal: "ჯამი",
          unitprice: "ერთეულის ფასი",
          quantity: "რაოდენობა",
          delete: "წაშლა",
          clearcart: "კალათის გასუფთავება",
          exploreship: "გამოიკვლიეთ უფასო მიწოდებით ყველა შეკვეთაზე!",
          buy: "განაგრძეთ ყიდვა",
          payment: "უსაფრთხო გადახდის ინფორმაცია",
          nameoncard: "სახელი ბარათზე",
          cardnumber: "ბარათის ნომერი",
          date: "ვადის გასვლის თარიღი",
          seccode: "უსაფრთხოების კოდი",
          pay: "გადაიხადე ახლა",
          discountedproducts: "ფასდაკლებული   პროდუქცია",
          smartphones: "სმარტფონები",
          laptops: "ლეპტოპები",
          gaming: "გეიმინგი",
          audio: "აუდიო",
          tv: "ტელევიზორი",
          tablets: "ტაბლეტები",
          photo: "ფოტო",
          productdetails: "პროდუქტის აღწერილობა",
          addtocart: "კალათაში დამატება",
          goback: "უკან დაბრუნება",
          compare: "შეადარე",
          addtowishlist: "სურვილების სიაში დამატება",
          details: "დეტალების ნახვა",
          filter: "ფასის ფილტრი",
          minprice: "მინიმალური ფასი",
          maxprice: "მაქსიმალური ფასი",
          brands: "ბრენდები",
          search: "ძებნა",
        },
      },
      fr: {
        translation: {
          delivery: "livrer à",
          deliveryCountry: "Géorgie",
          signIn: "Bonjour, connectez-vous",
          Account: "Comptes et listes",
          signOut: "Se déconnecter",
          return: "Retour",
          orders: "& Ordres",
          cart: "Panier",
          all: "Tout",
          deals: "Offres du jour",
          service: "Service Clientèle",
          registry: "Registre",
          giftCard: "Cartes cadeaux",
          sell: "Vendre",
          titleSide1: "Contenu et appareils numériques",
          titleSide2: "Magasiner par département",
          titleSide3: "Programmes et fonctionnalités",
          titleSide4: "Aide et paramètres",
          col11: "Amazon Musique",
          col12: "Liseuses et livres Kindle",
          col13: "Amazon Appstore",
          col21: "Électronique",
          col22: "Des ordinateurs",
          col23: "Maison intelligente",
          col31: "Cartes cadeaux",
          col32: "Amazon en direct",
          col33: "Achats internationaux",
          col41: "Votre compte",
          col42: "Service client",
          col43: "Contactez-nous",
          mlisttitle1: "Apprendre a nous connaitre",
          mlisttitle2: "Gagnez de l'argent avec nous",
          mlisttitle3: "Produits de paiement Amazon",
          mlisttitle4: "Laissez-nous vous aider",
          mlist1i1: "Carrières",
          mlist1i2: "Blog",
          mlist1i3: "À propos d'Amazon",
          mlist1i4: "Relations avec les investisseurs",
          mlist1i5: "Appareils Amazon",
          mlist1i6: "La science amazonienne",
          mlist2i1: "Vendre des produits sur Amazon",
          mlist2i2: "Vendre sur Amazon Business",
          mlist2i3: "Vendre des applications sur Amazon",
          mlist2i4: "Devenir un affilié",
          mlist2i5: "Annoncez vos produits",
          mlist2i6: "Auto-publier avec nous",
          mlist2i7: "Hébergez un hub Amazon",
          mlist2i8: "›Voir plus Gagnez de l'argent avec nous",
          mlist3i1: "Carte de visite Amazon",
          mlist3i2: "Achetez avec des points",
          mlist3i3: "Rechargez votre solde",
          mlist3i4: "Convertisseur de devises Amazon",
          mlist4i1: "Amazon et le COVID-19",
          mlist4i2: "Votre compte",
          mlist4i3: "Vos commandes",
          mlist4i4: "Tarifs et politiques d'expédition",
          mlist4i5: "Retours et remplacements",
          mlist4i6: "Gérez votre contenu et vos appareils",
          mlist4i7: "Assistant Amazon",
          mlist4i8: "Aide",
          flisttitle1: "Amazon Musique",
          flistitem1: "Diffusez des millions de chansons",
          flisttitle2: "Annonces Amazon",
          flistitem2: "Touchez les clients partout où ils passent leur temps",
          flisttitle3: "18h",
          flistitem3: "Obtenez des offres sur des marques de mode",
          flisttitle4: "AbeBooks",
          flistitem4: "Livres, œuvres d'art et objets de collection",
          flisttitle5: "ACX",
          flistitem5: "La publication de livres audio simplifiée",
          flisttitle6: "Vendre sur Amazon",
          flistitem6: "Créer un compte de vente",
          flisttitle7: "Entreprise Amazone",
          flistitem7: "Tout pour votre entreprise",
          flisttitle8: "AmazonGlobal",
          flistitem8: "Expédier les commandes à l’international",
          flisttitle9: "Services à domicile",
          flistitem9: "Garantie de bonheur des pros expérimentés",
          flisttitle10: "Services Web Amazon",
          flistitem10: "Services de cloud computing évolutifs",
          flisttitle11: "Audible",
          flistitem11:
            "Écoutez des livres et des performances audio originales",
          flisttitle12: "Mojo au box-office",
          flistitem12: "Rechercher des données sur la billetterie des films",
          flisttitle13: "Bonnes lectures",
          flistitem13: "Critiques et recommandations de livres",
          flisttitle14: "IMDb",
          flistitem14: "Films, télévision et célébrités",
          flisttitle15: "IMDbPro",
          flistitem15:
            "Obtenez les informations dont les professionnels du divertissement ont besoin",
          flisttitle16: "Publication directe Kindle",
          flistitem16:
            "L'édition numérique et imprimée indépendante simplifiée",
          flisttitle17: "Prime Vidéo Directe",
          flistitem17: "La distribution vidéo simplifiée",
          flisttitle18: "Shopbop",
          flistitem18: "Marques de mode de créateurs",
          flisttitle19: "Waouh!",
          flistitem19: "Offres et manigances",
          flisttitle20: "Zappos",
          flistitem20: "Chaussures et vêtements",
          flisttitle21: "Anneau",
          flistitem21: "Systèmes de sécurité pour maison intelligente",
          flisttitle22: "eero WiFi",
          flistitem22: "Diffusez des vidéos 4K dans chaque pièce",
          flisttitle23: "Clignoter",
          flistitem23: "Sécurité intelligente pour chaque maison",
          flisttitle24: "Application Voisins",
          flistitem24: "Alertes de criminalité et de sécurité en temps réel",
          flisttitle25: "Boîtes d'abonnement Amazon",
          flistitem25:
            "Les meilleures boîtes d'abonnement - directement à votre porte",
          flisttitle26: "Pack de pilules",
          flistitem26: "Pharmacie simplifiée",
          signin: "se connecter",
          emailornumber: "Email ou numéro de téléphone portable",
          password: "Mot de passe",
          continue: "Continuer",
          createacc: "Créez votre compte Amazon",
          needhelp: "Besoin d'aide?",
          agree1: "En continuant, vous acceptez les conditions d'Amazon",
          agree2: "conditions d'utilisation",
          and: "et",
          agree3: "Avis de confidentialité.",
          newmember: "Nouveau sur Amazon ?",
          conofuse: "Conditions d'utilisation",
          privacy: "Avis de confidentialité",
          help: "Aide",
          creator: "© 2024, Amazon.com-clone, Inc. ou ses filiales",
          createaccount: "Créer un compte",
          firstname: "Prénom",
          lastname: "Nom de famille",
          email: "E-mail",
          mobilenumber: "Numéro de portable",
          personalnumber: "Numéro personnel",
          repass: "Entrez à nouveau le mot de passe",
          createagree:
            "En créant un compte, vous acceptez les conditions d'Amazon",
          buyforwork: "Acheter pour le travail ?",
          businessacc: "Créez un compte professionnel gratuit",
          haveanacc: "Vous avez déjà un compte?",
          recomendations: "Voir les recommandations personnalisées",
          start: "Commencer ici.",
          emptycart: "Votre panier Amazon est vide",
          emptyorders: "Vos commandes Amazon sont vides",
          profile: "Votre profil",
          createdate: "Date de création:",
          lastupdate: "Dernière mise à jour",
          savechanges: "Sauvegarder les modifications",
          wishlist: "Liste de souhaits",
          items: "items",
          shoppingcart: "Panier",
          subtotal: "Subtotal",
          unitprice: "Prix ​unitaire",
          quantity: "Quantité",
          delete: "Effacer l'article",
          clearcart: "Vider le panier",
          exploreship:
            "Explorez avec la livraison gratuite sur toutes les commandes!",
          buy: "Procéder à l'achat",
          payment: "Informations sur le paiement sécurisé",
          nameoncard: "Nom sur la carte",
          cardnumber: "Numéro de carte",
          date: "Date d'expiration",
          seccode: "Code de sécurité",
          pay: "Payez maintenant",
          discountedproducts: "Produits à prix réduit",
          smartphones: "Téléphones intelligents",
          laptops: "Ordinateurs portables",
          gaming: "Jeux",
          audio: "l'audio",
          tv: "TV",
          tablets: "Comprimés",
          photo: "Photo",
          productdetails: "détails du produit",
          addtocart: "Ajouter au panier",
          goback: "Go back",
          compare: "Comparer",
          addtowishlist: "Ajouter à la liste de souhaits",
          details: "Voir les détails",
          filter: "Filtrer les prix",
          minprice: "Prix minimum",
          maxprice: "Prix maximum",
          brands: "Marques",
          search: "Recherche",
        },
      },
    },
  });