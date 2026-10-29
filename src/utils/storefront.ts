import { groceryProducts } from '@/data/grocery-products';
import { petFoodProducts } from '@/data/pet-food-products';
import { nutritionProducts } from '@/data/nutrition-products';
import { megastoreProducts } from '@/data/megastore-products';
import { carAccessoriesProducts } from '@/data/car-accessories-products';
import { pizzaProducts } from '@/data/pizza-products';
import { plantGardenProducts } from '@/data/plant-garden-products';
import { skinCareProducts } from '@/data/skin-care-products';
import { jewelleryProducts } from '@/data/jewellery-products';
import { headphonesProducts } from '@/data/headphones-products';
import { sneakerProducts } from '@/data/sneaker-products';
import { furnitureProducts } from '@/data/furniture-products';
import { elegantFashionProducts } from '@/data/elegant-fashion-products';
import { lipstainProducts } from '@/data/lipstain-products';
import { boutiqueProducts } from '@/data/boutique-fashion-products';
import { phoneCaseProducts } from '@/data/phone-case-products';
import { smartWatchesProducts } from '@/data/smart-watches-products';
import { electronicsStoreProducts } from '@/data/electronics-store-products';
import { singleProductProducts } from '@/data/single-product-products';
import { footwearProducts } from '@/data/footwear-products';
import { fashion04Products } from '@/data/fashion-04-products';
import { fashion03Products } from '@/data/fashion-03-products';
import { activeWearProducts } from '@/data/active-wear-products';
import { backpackProducts } from '@/data/backpack-products';
import { basketballProducts } from '@/data/basketball-products';
import { glassesProducts } from '@/data/glasses-products';
import { plumbingSuppliesProducts } from '@/data/plumbing-supplies-products';
import { bookProducts } from '@/data/book-products';
import { jewelry2Products } from '@/data/jewelry-2-products';
import { coffeeProducts } from '@/data/coffee-products';
import { craftAndDecoreProducts } from '@/data/craft-and-decore-products';
import { toysProducts } from '@/data/toys-products';
import { socksProducts } from '@/data/socks-products';
import { podProducts } from '@/data/pod-products';

export type Storefront = 'fashion' | 'grocery' | 'pet-food' | 'nutrition' | 'megastore' | 'car-accessories' | 'pizza' | 'plant-garden' | 'skin-care' | 'jewellery' | 'headphones' | 'sneaker' | 'furniture' | 'elegant-fashion' | 'lipstain' | 'boutique-fashion' | 'phone-case' | 'smart-watches' | 'electronics-store-2' | 'single-product' | 'footwear' | 'fashion-04' | 'fashion-03' | 'active-wear' | 'backpack' | 'basketball' | 'glasses' | 'plumbing-supplies' | 'book' | 'jewelry-2' | 'coffee' | 'craft-and-decore' | 'rtl-demo' | 'toys' | 'socks' | 'pod';

const grocerySlugs = new Set(groceryProducts.map((p) => p.slug));
const groceryProductIds = new Set(groceryProducts.map((p) => p.id));

const petFoodSlugs = new Set(petFoodProducts.map((p) => p.slug));
const petFoodProductIds = new Set(petFoodProducts.map((p) => p.id));

const nutritionSlugs = new Set(nutritionProducts.map((p) => p.slug));
const nutritionProductIds = new Set(nutritionProducts.map((p) => p.id));

const megastoreSlugs = new Set(megastoreProducts.map((p) => p.slug));
const megastoreProductIds = new Set(megastoreProducts.map((p) => p.id));

const carAccessoriesSlugs = new Set(carAccessoriesProducts.map((p) => p.slug));
const carAccessoriesProductIds = new Set(carAccessoriesProducts.map((p) => p.id));

const pizzaSlugs = new Set(pizzaProducts.map((p) => p.slug));
const pizzaProductIds = new Set(pizzaProducts.map((p) => p.id));

const plantGardenSlugs = new Set(plantGardenProducts.map((p) => p.slug));
const plantGardenProductIds = new Set(plantGardenProducts.map((p) => p.id));

const skinCareSlugs = new Set(skinCareProducts.map((p) => p.slug));
const skinCareProductIds = new Set(skinCareProducts.map((p) => p.id));

const jewellerySlugs = new Set(jewelleryProducts.map((p) => p.slug));
const jewelleryProductIds = new Set(jewelleryProducts.map((p) => p.id));

const headphonesSlugs = new Set(headphonesProducts.map((p) => p.slug));
const headphonesProductIds = new Set(headphonesProducts.map((p) => p.id));

const sneakerSlugs = new Set(sneakerProducts.map((p) => p.slug));
const sneakerProductIds = new Set(sneakerProducts.map((p) => p.id));

const furnitureSlugs = new Set(furnitureProducts.map((p) => p.slug));
const furnitureProductIds = new Set(furnitureProducts.map((p) => p.id));

const elegantFashionSlugs = new Set(elegantFashionProducts.map((p) => p.slug));
const elegantFashionProductIds = new Set(elegantFashionProducts.map((p) => p.id));

const lipstainSlugs = new Set(lipstainProducts.map((p) => p.slug));
const lipstainProductIds = new Set(lipstainProducts.map((p) => p.id));

const boutiqueSlugs = new Set(boutiqueProducts.map((p) => p.slug));
const boutiqueProductIds = new Set(boutiqueProducts.map((p) => p.id));

const phoneCaseSlugs = new Set(phoneCaseProducts.map((p) => p.slug));
const phoneCaseProductIds = new Set(phoneCaseProducts.map((p) => p.id));

const smartWatchesSlugs = new Set(smartWatchesProducts.map((p) => p.slug));
const smartWatchesProductIds = new Set(smartWatchesProducts.map((p) => p.id));

const electronicsStore2Slugs = new Set(electronicsStoreProducts.map((p) => p.slug));
const electronicsStore2ProductIds = new Set(electronicsStoreProducts.map((p) => p.id));

const singleProductSlugs = new Set(singleProductProducts.map((p) => p.slug));
const singleProductProductIds = new Set(singleProductProducts.map((p) => p.id));

const footwearSlugs = new Set(footwearProducts.map((p) => p.slug));
const footwearProductIds = new Set(footwearProducts.map((p) => p.id));

const fashion04Slugs = new Set(fashion04Products.map((p) => p.slug));
const fashion04ProductIds = new Set(fashion04Products.map((p) => p.id));

const fashion03Slugs = new Set(fashion03Products.map((p) => p.slug));
const fashion03ProductIds = new Set(fashion03Products.map((p) => p.id));

const activeWearSlugs = new Set(activeWearProducts.map((p) => p.slug));
const activeWearProductIds = new Set(activeWearProducts.map((p) => p.id));

const backpackSlugs = new Set(backpackProducts.map((p) => p.slug));
const backpackProductIds = new Set(backpackProducts.map((p) => p.id));

const basketballSlugs = new Set(basketballProducts.map((p) => p.slug));
const basketballProductIds = new Set(basketballProducts.map((p) => p.id));

const glassesSlugs = new Set(glassesProducts.map((p) => p.slug));
const glassesProductIds = new Set(glassesProducts.map((p) => p.id));

const plumbingSuppliesSlugs = new Set(plumbingSuppliesProducts.map((p) => p.slug));
const plumbingSuppliesProductIds = new Set(plumbingSuppliesProducts.map((p) => p.id));

const bookSlugs = new Set(bookProducts.map((p) => p.slug));
const bookProductIds = new Set(bookProducts.map((p) => p.id));
const jewelry2Slugs = new Set(jewelry2Products.map((p) => p.slug));
const jewelry2ProductIds = new Set(jewelry2Products.map((p) => p.id));
const coffeeSlugs = new Set(coffeeProducts.map((p) => p.slug));
const coffeeProductIds = new Set(coffeeProducts.map((p) => p.id));
const craftAndDecoreSlugs = new Set(craftAndDecoreProducts.map((p) => p.slug));
const craftAndDecoreProductIds = new Set(craftAndDecoreProducts.map((p) => p.id));
const toysSlugs = new Set(toysProducts.map((p) => p.slug));
const toysProductIds = new Set(toysProducts.map((p) => p.id));
const socksSlugs = new Set(socksProducts.map((p) => p.slug));
const socksProductIds = new Set(socksProducts.map((p) => p.id));
const podSlugs = new Set(podProducts.map((p) => p.slug));
const podProductIds = new Set(podProducts.map((p) => p.id));

export function isGrocerySlug(slug: string | null | undefined): boolean {
  return !!slug && grocerySlugs.has(slug);
}

export function isGroceryProductId(id: string | null | undefined): boolean {
  return !!id && groceryProductIds.has(id);
}

export function isPetFoodSlug(slug: string | null | undefined): boolean {
  return !!slug && petFoodSlugs.has(slug);
}

export function isPetFoodProductId(id: string | null | undefined): boolean {
  return !!id && petFoodProductIds.has(id);
}

export function isNutritionSlug(slug: string | null | undefined): boolean {
  return !!slug && nutritionSlugs.has(slug);
}

export function isNutritionProductId(id: string | null | undefined): boolean {
  return !!id && nutritionProductIds.has(id);
}

export function isMegastoreSlug(slug: string | null | undefined): boolean {
  return !!slug && megastoreSlugs.has(slug);
}

export function isMegastoreProductId(id: string | null | undefined): boolean {
  return !!id && megastoreProductIds.has(id);
}

export function isCarAccessoriesSlug(slug: string | null | undefined): boolean {
  return !!slug && carAccessoriesSlugs.has(slug);
}

export function isCarAccessoriesProductId(id: string | null | undefined): boolean {
  return !!id && carAccessoriesProductIds.has(id);
}

export function isPizzaSlug(slug: string | null | undefined): boolean {
  return !!slug && pizzaSlugs.has(slug);
}

export function isPizzaProductId(id: string | null | undefined): boolean {
  return !!id && pizzaProductIds.has(id);
}

export function isPlantGardenSlug(slug: string | null | undefined): boolean {
  return !!slug && plantGardenSlugs.has(slug);
}

export function isPlantGardenProductId(id: string | null | undefined): boolean {
  return !!id && plantGardenProductIds.has(id);
}

export function isSkinCareSlug(slug: string | null | undefined): boolean {
  return !!slug && skinCareSlugs.has(slug);
}

export function isSkinCareProductId(id: string | null | undefined): boolean {
  return !!id && skinCareProductIds.has(id);
}

export function isJewellerySlug(slug: string | null | undefined): boolean {
  return !!slug && jewellerySlugs.has(slug);
}

export function isJewelleryProductId(id: string | null | undefined): boolean {
  return !!id && jewelleryProductIds.has(id);
}

export function isHeadphonesSlug(slug: string | null | undefined): boolean {
  return !!slug && headphonesSlugs.has(slug);
}

export function isHeadphonesProductId(id: string | null | undefined): boolean {
  return !!id && headphonesProductIds.has(id);
}

export function isSneakerSlug(slug: string | null | undefined): boolean {
  return !!slug && sneakerSlugs.has(slug);
}

export function isSneakerProductId(id: string | null | undefined): boolean {
  return !!id && sneakerProductIds.has(id);
}

export function isFurnitureSlug(slug: string | null | undefined): boolean {
  return !!slug && furnitureSlugs.has(slug);
}

export function isFurnitureProductId(id: string | null | undefined): boolean {
  return !!id && furnitureProductIds.has(id);
}

export function isElegantFashionSlug(slug: string | null | undefined): boolean {
  return !!slug && elegantFashionSlugs.has(slug);
}

export function isElegantFashionProductId(id: string | null | undefined): boolean {
  return !!id && elegantFashionProductIds.has(id);
}

export function isLipstainSlug(slug: string | null | undefined): boolean {
  return !!slug && lipstainSlugs.has(slug);
}

export function isLipstainProductId(id: string | null | undefined): boolean {
  return !!id && lipstainProductIds.has(id);
}

export function isBoutiqueSlug(slug: string | null | undefined): boolean {
  return !!slug && boutiqueSlugs.has(slug);
}

export function isBoutiqueProductId(id: string | null | undefined): boolean {
  return !!id && boutiqueProductIds.has(id);
}

export function isPhoneCaseSlug(slug: string | null | undefined): boolean {
  return !!slug && phoneCaseSlugs.has(slug);
}

export function isPhoneCaseProductId(id: string | null | undefined): boolean {
  return !!id && phoneCaseProductIds.has(id);
}

export function isSmartWatchesSlug(slug: string | null | undefined): boolean {
  return !!slug && smartWatchesSlugs.has(slug);
}

export function isSmartWatchesProductId(id: string | null | undefined): boolean {
  return !!id && smartWatchesProductIds.has(id);
}

export function isElectronicsStore2Slug(slug: string | null | undefined): boolean {
  return !!slug && electronicsStore2Slugs.has(slug);
}

export function isElectronicsStore2ProductId(id: string | null | undefined): boolean {
  return !!id && electronicsStore2ProductIds.has(id);
}

export function isSingleProductSlug(slug: string | null | undefined): boolean {
  return !!slug && singleProductSlugs.has(slug);
}

export function isSingleProductProductId(id: string | null | undefined): boolean {
  return !!id && singleProductProductIds.has(id);
}

export function isFootwearSlug(slug: string | null | undefined): boolean {
  return !!slug && footwearSlugs.has(slug);
}

export function isFootwearProductId(id: string | null | undefined): boolean {
  return !!id && footwearProductIds.has(id);
}

export function isFashion04Slug(slug: string | null | undefined): boolean {
  return !!slug && fashion04Slugs.has(slug);
}

export function isFashion04ProductId(id: string | null | undefined): boolean {
  return !!id && fashion04ProductIds.has(id);
}

export function isFashion03Slug(slug: string | null | undefined): boolean {
  return !!slug && fashion03Slugs.has(slug);
}

export function isFashion03ProductId(id: string | null | undefined): boolean {
  return !!id && fashion03ProductIds.has(id);
}

export function isActiveWearSlug(slug: string | null | undefined): boolean {
  return !!slug && activeWearSlugs.has(slug);
}

export function isActiveWearProductId(id: string | null | undefined): boolean {
  return !!id && activeWearProductIds.has(id);
}

export function isBackpackSlug(slug: string | null | undefined): boolean {
  return !!slug && backpackSlugs.has(slug);
}

export function isBackpackProductId(id: string | null | undefined): boolean {
  return !!id && backpackProductIds.has(id);
}

export function isBasketballSlug(slug: string | null | undefined): boolean {
  return !!slug && basketballSlugs.has(slug);
}

export function isBasketballProductId(id: string | null | undefined): boolean {
  return !!id && basketballProductIds.has(id);
}

export function isGlassesSlug(slug: string | null | undefined): boolean {
  return !!slug && glassesSlugs.has(slug);
}

export function isGlassesProductId(id: string | null | undefined): boolean {
  return !!id && glassesProductIds.has(id);
}

export function isPlumbingSuppliesSlug(slug: string | null | undefined): boolean {
  return !!slug && plumbingSuppliesSlugs.has(slug);
}

export function isPlumbingSuppliesProductId(id: string | null | undefined): boolean {
  return !!id && plumbingSuppliesProductIds.has(id);
}

export function isBookSlug(slug: string | null | undefined): boolean {
  return !!slug && bookSlugs.has(slug);
}

export function isBookProductId(id: string | null | undefined): boolean {
  return !!id && bookProductIds.has(id);
}

export function isJewelry2Slug(slug: string | null | undefined): boolean {
  return !!slug && jewelry2Slugs.has(slug);
}

export function isJewelry2ProductId(id: string | null | undefined): boolean {
  return !!id && jewelry2ProductIds.has(id);
}

export function isCoffeeSlug(slug: string | null | undefined): boolean {
  return !!slug && coffeeSlugs.has(slug);
}

export function isCoffeeProductId(id: string | null | undefined): boolean {
  return !!id && coffeeProductIds.has(id);
}

export function isCraftAndDecoreSlug(slug: string | null | undefined): boolean {
  return !!slug && craftAndDecoreSlugs.has(slug);
}

export function isCraftAndDecoreProductId(id: string | null | undefined): boolean {
  return !!id && craftAndDecoreProductIds.has(id);
}

export function isToysSlug(slug: string | null | undefined): boolean {
  return !!slug && toysSlugs.has(slug);
}

export function isToysProductId(id: string | null | undefined): boolean {
  return !!id && toysProductIds.has(id);
}

export function isSocksSlug(slug: string | null | undefined): boolean {
  return !!slug && socksSlugs.has(slug);
}

export function isSocksProductId(id: string | null | undefined): boolean {
  return !!id && socksProductIds.has(id);
}

export function isPodSlug(slug: string | null | undefined): boolean {
  return !!slug && podSlugs.has(slug);
}

export function isPodProductId(id: string | null | undefined): boolean {
  return !!id && podProductIds.has(id);
}

export function getStorefrontFromPath(pathname: string | null | undefined): Storefront {
  if (!pathname) return 'fashion';
  if (pathname.startsWith('/nutrition/') || pathname.startsWith('/home/nutrition-shop')) {
    return 'nutrition';
  }
  if (pathname.startsWith('/pet-food/') || pathname.startsWith('/home/pet-food-shop')) {
    return 'pet-food';
  }
  if (pathname.startsWith('/grocery/') || pathname.startsWith('/home/grocery-shop')) {
    return 'grocery';
  }
  if (pathname.startsWith('/megastore/') || pathname.startsWith('/home/megastore-shop')) {
    return 'megastore';
  }
  if (pathname.startsWith('/car-accessories/') || pathname.startsWith('/home/car-accessories-shop')) {
    return 'car-accessories';
  }
  if (pathname.startsWith('/pizza/') || pathname.startsWith('/home/pizza-shop')) {
    return 'pizza';
  }
  if (pathname.startsWith('/plant-garden/') || pathname.startsWith('/home/plant-garden-shop')) {
    return 'plant-garden';
  }
  if (pathname.startsWith('/home/skin-care-shop')) {
    return 'skin-care';
  }
  if (pathname.startsWith('/jewellery/') || pathname.startsWith('/home/jewellery-shop')) {
    return 'jewellery';
  }
  if (pathname.startsWith('/headphones/') || pathname.startsWith('/home/headphones-shop')) {
    return 'headphones';
  }
  if (pathname.startsWith('/home/sneaker-shop')) {
    return 'sneaker';
  }
  if (pathname.startsWith('/home/furniture-shop')) {
    return 'furniture';
  }
  if (pathname.startsWith('/home/elegant-fashion-shop')) {
    return 'elegant-fashion';
  }
  if (pathname.startsWith('/home/lipstain-shop')) {
    return 'lipstain';
  }
  if (pathname.startsWith('/home/boutique-fashion-shop') || pathname.startsWith('/boutique-fashion')) {
    return 'boutique-fashion';
  }
  if (pathname.startsWith('/home/phone-case-shop') || pathname.startsWith('/phone-case/')) {
    return 'phone-case';
  }
  if (pathname.startsWith('/home/smart-watches-shop') || pathname.startsWith('/smart-watches/')) {
    return 'smart-watches';
  }
  if (pathname.startsWith('/home/electronics-store-2-shop') || pathname.startsWith('/electronics-store-2/')) {
    return 'electronics-store-2';
  }
  if (pathname.startsWith('/home/single-product-shop') || pathname.startsWith('/single-product/')) {
    return 'single-product';
  }
  if (pathname.startsWith('/home/footwear-shop') || pathname.startsWith('/footwear/')) {
    return 'footwear';
  }
  if (pathname.startsWith('/home/fashion-04-shop')) {
    return 'fashion-04';
  }
  if (pathname.startsWith('/home/fashion-03-shop')) {
    return 'fashion-03';
  }
  if (pathname.startsWith('/home/active-wear-shop')) {
    return 'active-wear';
  }
  if (pathname.startsWith('/home/backpack-shop')) {
    return 'backpack';
  }
  if (pathname.startsWith('/home/basketball-shop')) {
    return 'basketball';
  }
  if (pathname.startsWith('/home/glasses-shop')) {
    return 'glasses';
  }
  if (pathname.startsWith('/home/plumbing-supplies-shop')) {
    return 'plumbing-supplies';
  }
  if (pathname.startsWith('/home/book-shop')) {
    return 'book';
  }
  if (pathname.startsWith('/home/jewelry-2-shop')) {
    return 'jewelry-2';
  }
  if (pathname.startsWith('/home/coffee-shop')) {
    return 'coffee';
  }
  if (pathname.startsWith('/home/craft-and-decore-shop')) {
    return 'craft-and-decore';
  }
  if (pathname.startsWith('/home/rtl-demo-shop')) {
    return 'rtl-demo';
  }
  if (pathname.startsWith('/home/toys-shop')) {
    return 'toys';
  }
  if (pathname.startsWith('/home/socks-shop')) {
    return 'socks';
  }
  if (pathname.startsWith('/home/pod-shop')) {
    return 'pod';
  }
  return 'fashion';
}

export function getStorefrontOfSlug(slug: string | null | undefined): Storefront {
  if (isGrocerySlug(slug)) return 'grocery';
  if (isPetFoodSlug(slug)) return 'pet-food';
  if (isNutritionSlug(slug)) return 'nutrition';
  if (isMegastoreSlug(slug)) return 'megastore';
  if (isCarAccessoriesSlug(slug)) return 'car-accessories';
  if (isPizzaSlug(slug)) return 'pizza';
  if (isPlantGardenSlug(slug)) return 'plant-garden';
  if (isSkinCareSlug(slug)) return 'skin-care';
  if (isJewellerySlug(slug)) return 'jewellery';
  if (isHeadphonesSlug(slug)) return 'headphones';
  if (isSneakerSlug(slug)) return 'sneaker';
  if (isFurnitureSlug(slug)) return 'furniture';
  if (isElegantFashionSlug(slug)) return 'elegant-fashion';
  if (isLipstainSlug(slug)) return 'lipstain';
  if (isBoutiqueSlug(slug)) return 'boutique-fashion';
  if (isPhoneCaseSlug(slug)) return 'phone-case';
  if (isSmartWatchesSlug(slug)) return 'smart-watches';
  if (isElectronicsStore2Slug(slug)) return 'electronics-store-2';
  if (isSingleProductSlug(slug)) return 'single-product';
  if (isFootwearSlug(slug)) return 'footwear';
  if (isFashion04Slug(slug)) return 'fashion-04';
  if (isFashion03Slug(slug)) return 'fashion-03';
  if (isActiveWearSlug(slug)) return 'active-wear';
  if (isBackpackSlug(slug)) return 'backpack';
  if (isBasketballSlug(slug)) return 'basketball';
  if (isGlassesSlug(slug)) return 'glasses';
  if (isPlumbingSuppliesSlug(slug)) return 'plumbing-supplies';
  if (isBookSlug(slug)) return 'book';
  if (isJewelry2Slug(slug)) return 'jewelry-2';
  if (isCoffeeSlug(slug)) return 'coffee';
  if (isCraftAndDecoreSlug(slug)) return 'craft-and-decore';
  if (isToysSlug(slug)) return 'toys';
  if (isSocksSlug(slug)) return 'socks';
  if (isPodSlug(slug)) return 'pod';
  return 'fashion';
}

export function getStorefrontOfProductId(id: string | null | undefined): Storefront {
  if (isGroceryProductId(id)) return 'grocery';
  if (isPetFoodProductId(id)) return 'pet-food';
  if (isNutritionProductId(id)) return 'nutrition';
  if (isMegastoreProductId(id)) return 'megastore';
  if (isCarAccessoriesProductId(id)) return 'car-accessories';
  if (isPizzaProductId(id)) return 'pizza';
  if (isPlantGardenProductId(id)) return 'plant-garden';
  if (isSkinCareProductId(id)) return 'skin-care';
  if (isJewelleryProductId(id)) return 'jewellery';
  if (isHeadphonesProductId(id)) return 'headphones';
  if (isSneakerProductId(id)) return 'sneaker';
  if (isFurnitureProductId(id)) return 'furniture';
  if (isElegantFashionProductId(id)) return 'elegant-fashion';
  if (isLipstainProductId(id)) return 'lipstain';
  if (isBoutiqueProductId(id)) return 'boutique-fashion';
  if (isPhoneCaseProductId(id)) return 'phone-case';
  if (isSmartWatchesProductId(id)) return 'smart-watches';
  if (isElectronicsStore2ProductId(id)) return 'electronics-store-2';
  if (isSingleProductProductId(id)) return 'single-product';
  if (isFootwearProductId(id)) return 'footwear';
  if (isFashion04ProductId(id)) return 'fashion-04';
  if (isFashion03ProductId(id)) return 'fashion-03';
  if (isActiveWearProductId(id)) return 'active-wear';
  if (isBackpackProductId(id)) return 'backpack';
  if (isBasketballProductId(id)) return 'basketball';
  if (isGlassesProductId(id)) return 'glasses';
  if (isPlumbingSuppliesProductId(id)) return 'plumbing-supplies';
  if (isBookProductId(id)) return 'book';
  if (isJewelry2ProductId(id)) return 'jewelry-2';
  if (isCoffeeProductId(id)) return 'coffee';
  if (isCraftAndDecoreProductId(id)) return 'craft-and-decore';
  if (isToysProductId(id)) return 'toys';
  if (isSocksProductId(id)) return 'socks';
  if (isPodProductId(id)) return 'pod';
  return 'fashion';
}

/**
 * Storefronts that reuse the Fashion shell routes (/shop, /products, /wishlist, /compare).
 * Their cart/wishlist/compare items live alongside Fashion's, so the shared
 * /wishlist and /compare pages must treat them as one scope.
 */
const FASHION_SHELL_STOREFRONTS: Storefront[] = ['fashion', 'skin-care', 'footwear', 'fashion-04', 'fashion-03', 'active-wear', 'backpack', 'basketball', 'glasses', 'plumbing-supplies', 'book', 'jewelry-2', 'coffee', 'craft-and-decore', 'rtl-demo', 'toys', 'socks', 'pod'];

/**
 * True when two storefronts share the same wishlist/compare scope. Fashion-shell
 * storefronts (fashion, skin-care, footwear) are grouped together so items added
 * from any of them appear on the shared /wishlist and /compare pages; every other
 * storefront only matches itself.
 */
export function isSameStoreScope(a: Storefront, b: Storefront): boolean {
  if (FASHION_SHELL_STOREFRONTS.includes(a) && FASHION_SHELL_STOREFRONTS.includes(b)) return true;
  return a === b;
}

export function productHrefBaseFor(storefront: Storefront): string {
  switch (storefront) {
    case 'grocery': return '/grocery/product';
    case 'pet-food': return '/pet-food/product';
    case 'nutrition': return '/nutrition/product';
    case 'megastore': return '/megastore/product';
    case 'car-accessories': return '/car-accessories/product';
    case 'pizza': return '/pizza/product';
    case 'plant-garden': return '/plant-garden/product';
    case 'skin-care': return '/products';
    case 'jewellery': return '/products';
    case 'headphones': return '/products';
    case 'sneaker': return '/products';
    case 'furniture': return '/products';
    case 'elegant-fashion': return '/products';
    case 'lipstain': return '/products';
    case 'boutique-fashion': return '/boutique-fashion/product';
    case 'phone-case': return '/phone-case/product';
    case 'smart-watches': return '/smart-watches/product';
    case 'electronics-store-2': return '/products';
    case 'single-product': return '/products';
    case 'footwear': return '/products';
    case 'fashion-04': return '/products';
    case 'fashion-03': return '/products';
    case 'active-wear': return '/products';
    case 'backpack': return '/products';
    case 'basketball': return '/products';
    case 'glasses': return '/products';
    case 'plumbing-supplies': return '/products';
    case 'book': return '/products';
    case 'jewelry-2': return '/products';
    case 'coffee': return '/products';
    case 'craft-and-decore': return '/products';
    case 'toys': return '/products';
    case 'socks': return '/products';
    case 'pod': return '/products';
    default: return '/products';
  }
}

export function shopHrefFor(storefront: Storefront): string {
  switch (storefront) {
    case 'grocery': return '/grocery/shop';
    case 'pet-food': return '/pet-food/shop';
    case 'nutrition': return '/nutrition/shop';
    case 'megastore': return '/megastore/shop';
    case 'car-accessories': return '/car-accessories/shop';
    case 'pizza': return '/pizza/shop';
    case 'plant-garden': return '/plant-garden/shop';
    case 'skin-care': return '/shop';
    case 'jewellery': return '/shop';
    case 'headphones': return '/headphones/shop';
    case 'sneaker': return '/shop';
    case 'furniture': return '/shop';
    case 'elegant-fashion': return '/shop';
    case 'lipstain': return '/shop';
    case 'boutique-fashion': return '/boutique-fashion/shop';
    case 'phone-case': return '/phone-case/shop';
    case 'smart-watches': return '/smart-watches/shop';
    case 'electronics-store-2': return '/shop';
    case 'single-product': return '/shop';
    case 'footwear': return '/shop';
    case 'fashion-04': return '/shop';
    case 'fashion-03': return '/shop';
    case 'active-wear': return '/shop';
    case 'backpack': return '/shop';
    case 'basketball': return '/shop';
    case 'glasses': return '/shop';
    case 'plumbing-supplies': return '/shop';
    case 'book': return '/shop';
    case 'jewelry-2': return '/shop';
    case 'coffee': return '/shop';
    case 'craft-and-decore': return '/shop';
    case 'toys': return '/shop';
    case 'socks': return '/shop';
    case 'pod': return '/shop';
    default: return '/shop';
  }
}
