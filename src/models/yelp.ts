export type BusinessSearch = {
  businesses: Business[];
  total: string;
}

export type Business = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: string;
  url: string;
  review_count: string;
  categories: BusinessCategory[];
  rating: string;
  coordinates: BusinessCoordinates;
  transactions: string[];
  price: string;
  location: BusinessLocation;
  phone: string;
  display_phone: string;
}

type BusinessCategory = {
  alias: string;
  title: string;
}

type BusinessCoordinates = {
  latitude: string;
  longitude: string;
}

type BusinessLocation = {
  display_address: string;
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  zip_code?: string;
  country?: string;
  state?: string;
  cross_street?: string;
}
