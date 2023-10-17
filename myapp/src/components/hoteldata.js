const HotelData = [
  {
    "id": 1,
    "hotelName": "Paris Riviera Hotel",
    "hotelImageLink": "https://example.com/images/paris_riviera_hotel.jpg",
    "hotelDestination": "France",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-10-01",
    "CheckOutDate": "2023-10-06",
    "roomPrice": 170.0
  },
  {
    "id": 2,
    "hotelName": "Venice Grand Hotel",
    "hotelImageLink": "https://example.com/images/venice_grand_hotel.jpg",
    "hotelDestination": "Italy",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-10-02",
    "CheckOutDate": "2023-10-07",
    "roomPrice": 160.0
  },
  {
    "id": 3,
    "hotelName": "Barcelona Beachfront Resort",
    "hotelImageLink": "https://example.com/images/barcelona_beachfront_resort.jpg",
    "hotelDestination": "Spain",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-10-03",
    "CheckOutDate": "2023-10-08",
    "roomPrice": 180.0
  },
  {
    "id": 4,
    "hotelName": "Athens City View Hotel",
    "hotelImageLink": "https://example.com/images/athens_city_view_hotel.jpg",
    "hotelDestination": "Greece",
    "hotelRatings": 4.3,
    "CheckInDate": "2023-10-04",
    "CheckOutDate": "2023-10-09",
    "roomPrice": 150.0
  },
  {
    "id": 5,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-10-05",
    "CheckOutDate": "2023-10-10",
    "roomPrice": 190.0
  },
  {
    "id": 6,
    "hotelName": "Lisbon Coastal Retreat",
    "hotelImageLink": "https://example.com/images/lisbon_coastal_retreat.jpg",
    "hotelDestination": "Portugal",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-10-06",
    "CheckOutDate": "2023-10-11",
    "roomPrice": 170.0
  },
  {
    "id": 7,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-10-07",
    "CheckOutDate": "2023-10-12",
    "roomPrice": 160.0
  },
  {
    "id": 8,
    "hotelName": "Zurich Lakeside Resort",
    "hotelImageLink": "https://example.com/images/zurich_lakeside_resort.jpg",
    "hotelDestination": "Switzerland",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-10-08",
    "CheckOutDate": "2023-10-13",
    "roomPrice": 180.0
  },
  {
    "id": 9,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2023-10-09",
    "CheckOutDate": "2023-10-14",
    "roomPrice": 150.0
  },
  {
    "id": 10,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-10-10",
    "CheckOutDate": "2023-10-15",
    "roomPrice": 190.0
  },
  {
    "id": 11,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-10-11",
    "CheckOutDate": "2023-10-16",
    "roomPrice": 170.0
  },
  {
    "id": 12,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-10-12",
    "CheckOutDate": "2023-10-17",
    "roomPrice": 175.0
  },
  {
    "id": 13,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-10-13",
    "CheckOutDate": "2023-10-18",
    "roomPrice": 160.0
  },
  {
    "id": 14,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-10-14",
    "CheckOutDate": "2023-10-19",
    "roomPrice": 190.0
  },
  {
    "id": 15,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-10-15",
    "CheckOutDate": "2023-10-20",
    "roomPrice": 170.0
  },
  {
    "id": 16,
    "hotelName": "Oslo Fjordside Resort",
    "hotelImageLink": "https://example.com/images/oslo_fjordside_resort.jpg",
    "hotelDestination": "Norway",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-10-16",
    "CheckOutDate": "2023-10-21",
    "roomPrice": 175.0
  },
  {
    "id": 17,
    "hotelName": "Helsinki Northern Lights Hotel",
    "hotelImageLink": "https://example.com/images/helsinki_northern_lights_hotel.jpg",
    "hotelDestination": "Finland",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-10-17",
    "CheckOutDate": "2023-10-22",
    "roomPrice": 160.0
  },
  {
    "id": 18,
    "hotelName": "Warsaw Royal Palace Hotel",
    "hotelImageLink": "https://example.com/images/warsaw_royal_palace_hotel.jpg",
    "hotelDestination": "Poland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-10-18",
    "CheckOutDate": "2023-10-23",
    "roomPrice": 190.0
  },
  {
    "id": 19,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-10-19",
    "CheckOutDate": "2023-10-24",
    "roomPrice": 170.0
  },
  {
    "id": 20,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-10-20",
    "CheckOutDate": "2023-10-25",
    "roomPrice": 180.0
  },
  {
    "id": 21,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2023-10-21",
    "CheckOutDate": "2023-10-26",
    "roomPrice": 150.0
  },
  {
    "id": 22,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-10-22",
    "CheckOutDate": "2023-10-27",
    "roomPrice": 190.0
  },
  {
    "id": 23,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-10-23",
    "CheckOutDate": "2023-10-28",
    "roomPrice": 170.0
  },
  {
    "id": 24,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-10-24",
    "CheckOutDate": "2023-10-29",
    "roomPrice": 175.0
  },
  {
    "id": 25,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-10-25",
    "CheckOutDate": "2023-10-30",
    "roomPrice": 160.0
  },
  {
    "id": 26,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-10-26",
    "CheckOutDate": "2023-10-31",
    "roomPrice": 190.0
  },
  {
    "id": 27,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-11-01",
    "CheckOutDate": "2023-11-06",
    "roomPrice": 170.0
  },
  {
    "id": 28,
    "hotelName": "Oslo Fjordside Resort",
    "hotelImageLink": "https://example.com/images/oslo_fjordside_resort.jpg",
    "hotelDestination": "Norway",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-11-02",
    "CheckOutDate": "2023-11-07",
    "roomPrice": 175.0
  },
  {
    "id": 29,
    "hotelName": "Helsinki Northern Lights Hotel",
    "hotelImageLink": "https://example.com/images/helsinki_northern_lights_hotel.jpg",
    "hotelDestination": "Finland",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-11-03",
    "CheckOutDate": "2023-11-08",
    "roomPrice": 160.0
  },
  {
    "id": 30,
    "hotelName": "Warsaw Royal Palace Hotel",
    "hotelImageLink": "https://example.com/images/warsaw_royal_palace_hotel.jpg",
    "hotelDestination": "Poland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-11-04",
    "CheckOutDate": "2023-11-09",
    "roomPrice": 190.0
  },
  {
    "id": 31,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-11-05",
    "CheckOutDate": "2023-11-10",
    "roomPrice": 170.0
  },
  {
    "id": 32,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-11-06",
    "CheckOutDate": "2023-11-11",
    "roomPrice": 180.0
  },
  {
    "id": 33,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2023-11-07",
    "CheckOutDate": "2023-11-12",
    "roomPrice": 150.0
  },
  {
    "id": 34,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-11-08",
    "CheckOutDate": "2023-11-13",
    "roomPrice": 190.0
  },
  {
    "id": 35,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-11-09",
    "CheckOutDate": "2023-11-14",
    "roomPrice": 170.0
  },
  {
    "id": 36,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-11-10",
    "CheckOutDate": "2023-11-15",
    "roomPrice": 175.0
  },
  {
    "id": 37,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-11-11",
    "CheckOutDate": "2023-11-16",
    "roomPrice": 160.0
  },
  {
    "id": 38,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-11-12",
    "CheckOutDate": "2023-11-17",
    "roomPrice": 190.0
  },
  {
    "id": 39,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-11-13",
    "CheckOutDate": "2023-11-18",
    "roomPrice": 170.0
  },
  {
    "id": 40,
    "hotelName": "Oslo Fjordside Resort",
    "hotelImageLink": "https://example.com/images/oslo_fjordside_resort.jpg",
    "hotelDestination": "Norway",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-11-14",
    "CheckOutDate": "2023-11-19",
    "roomPrice": 175.0
  },
  {
    "id": 41,
    "hotelName": "Helsinki Northern Lights Hotel",
    "hotelImageLink": "https://example.com/images/helsinki_northern_lights_hotel.jpg",
    "hotelDestination": "Finland",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-11-15",
    "CheckOutDate": "2023-11-20",
    "roomPrice": 160.0
  },
  {
    "id": 42,
    "hotelName": "Warsaw Royal Palace Hotel",
    "hotelImageLink": "https://example.com/images/warsaw_royal_palace_hotel.jpg",
    "hotelDestination": "Poland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-11-16",
    "CheckOutDate": "2023-11-21",
    "roomPrice": 190.0
  },
  {
    "id": 43,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-11-17",
    "CheckOutDate": "2023-11-22",
    "roomPrice": 170.0
  },
  {
    "id": 44,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-11-18",
    "CheckOutDate": "2023-11-23",
    "roomPrice": 180.0
  },
  {
    "id": 45,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2023-11-19",
    "CheckOutDate": "2023-11-24",
    "roomPrice": 150.0
  },
  {
    "id": 46,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-11-20",
    "CheckOutDate": "2023-11-25",
    "roomPrice": 190.0
  },
  {
    "id": 47,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-11-21",
    "CheckOutDate": "2023-11-26",
    "roomPrice": 170.0
  },
  {
    "id": 48,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-11-22",
    "CheckOutDate": "2023-11-27",
    "roomPrice": 175.0
  },
  {
    "id": 49,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-11-23",
    "CheckOutDate": "2023-11-28",
    "roomPrice": 160.0
  },
  {
    "id": 50,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-11-24",
    "CheckOutDate": "2023-11-29",
    "roomPrice": 190.0
  },
  {
    "id": 51,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-11-25",
    "CheckOutDate": "2023-11-30",
    "roomPrice": 170.0
  },
  {
    "id": 52,
    "hotelName": "Oslo Fjordside Resort",
    "hotelImageLink": "https://example.com/images/oslo_fjordside_resort.jpg",
    "hotelDestination": "Norway",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-11-26",
    "CheckOutDate": "2023-12-01",
    "roomPrice": 175.0
  },
  {
    "id": 53,
    "hotelName": "Helsinki Northern Lights Hotel",
    "hotelImageLink": "https://example.com/images/helsinki_northern_lights_hotel.jpg",
    "hotelDestination": "Finland",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-12-01",
    "CheckOutDate": "2023-12-06",
    "roomPrice": 160.0
  },
  {
    "id": 54,
    "hotelName": "Warsaw Royal Palace Hotel",
    "hotelImageLink": "https://example.com/images/warsaw_royal_palace_hotel.jpg",
    "hotelDestination": "Poland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-12-02",
    "CheckOutDate": "2023-12-07",
    "roomPrice": 190.0
  },
  {
    "id": 55,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-12-03",
    "CheckOutDate": "2023-12-08",
    "roomPrice": 170.0
  },
  {
    "id": 56,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-12-04",
    "CheckOutDate": "2023-12-09",
    "roomPrice": 180.0
  },
  {
    "id": 57,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2023-12-05",
    "CheckOutDate": "2023-12-10",
    "roomPrice": 150.0
  },
  {
    "id": 58,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-12-06",
    "CheckOutDate": "2023-12-11",
    "roomPrice": 190.0
  },
  {
    "id": 59,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-12-07",
    "CheckOutDate": "2023-12-12",
    "roomPrice": 170.0
  },
  {
    "id": 60,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-12-08",
    "CheckOutDate": "2023-12-13",
    "roomPrice": 175.0
  },
  {
    "id": 61,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-12-09",
    "CheckOutDate": "2023-12-14",
    "roomPrice": 160.0
  },
  {
    "id": 62,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-12-10",
    "CheckOutDate": "2023-12-15",
    "roomPrice": 190.0
  },
  {
    "id": 63,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-12-11",
    "CheckOutDate": "2023-12-16",
    "roomPrice": 170.0
  },
  {
    "id": 64,
    "hotelName": "Oslo Fjordside Resort",
    "hotelImageLink": "https://example.com/images/oslo_fjordside_resort.jpg",
    "hotelDestination": "Norway",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-12-12",
    "CheckOutDate": "2023-12-17",
    "roomPrice": 175.0
  },
  {
    "id": 65,
    "hotelName": "Helsinki Northern Lights Hotel",
    "hotelImageLink": "https://example.com/images/helsinki_northern_lights_hotel.jpg",
    "hotelDestination": "Finland",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-12-13",
    "CheckOutDate": "2023-12-18",
    "roomPrice": 160.0
  },
  {
    "id": 66,
    "hotelName": "Warsaw Royal Palace Hotel",
    "hotelImageLink": "https://example.com/images/warsaw_royal_palace_hotel.jpg",
    "hotelDestination": "Poland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-12-14",
    "CheckOutDate": "2023-12-19",
    "roomPrice": 190.0
  },
  {
    "id": 67,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-12-15",
    "CheckOutDate": "2023-12-20",
    "roomPrice": 170.0
  },
  {
    "id": 68,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-12-16",
    "CheckOutDate": "2023-12-21",
    "roomPrice": 180.0
  },
  {
    "id": 69,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2023-12-17",
    "CheckOutDate": "2023-12-22",
    "roomPrice": 150.0
  },
  {
    "id": 70,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-12-18",
    "CheckOutDate": "2023-12-23",
    "roomPrice": 190.0
  },
  {
    "id": 71,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-12-19",
    "CheckOutDate": "2023-12-24",
    "roomPrice": 170.0
  },
  {
    "id": 72,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-12-20",
    "CheckOutDate": "2023-12-25",
    "roomPrice": 175.0
  },
  {
    "id": 73,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-12-21",
    "CheckOutDate": "2023-12-26",
    "roomPrice": 160.0
  },
  {
    "id": 74,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-12-22",
    "CheckOutDate": "2023-12-27",
    "roomPrice": 190.0
  },
  {
    "id": 75,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2023-12-23",
    "CheckOutDate": "2023-12-28",
    "roomPrice": 170.0
  },
  {
    "id": 76,
    "hotelName": "Oslo Fjordside Resort",
    "hotelImageLink": "https://example.com/images/oslo_fjordside_resort.jpg",
    "hotelDestination": "Norway",
    "hotelRatings": 4.6,
    "CheckInDate": "2023-12-24",
    "CheckOutDate": "2023-12-29",
    "roomPrice": 175.0
  },
  {
    "id": 77,
    "hotelName": "Helsinki Northern Lights Hotel",
    "hotelImageLink": "https://example.com/images/helsinki_northern_lights_hotel.jpg",
    "hotelDestination": "Finland",
    "hotelRatings": 4.4,
    "CheckInDate": "2023-12-25",
    "CheckOutDate": "2023-12-30",
    "roomPrice": 160.0
  },
  {
    "id": 78,
    "hotelName": "Warsaw Royal Palace Hotel",
    "hotelImageLink": "https://example.com/images/warsaw_royal_palace_hotel.jpg",
    "hotelDestination": "Poland",
    "hotelRatings": 4.7,
    "CheckInDate": "2023-12-26",
    "CheckOutDate": "2023-12-31",
    "roomPrice": 190.0
  },
  {
    "id": 79,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.5,
    "CheckInDate": "2024-01-01",
    "CheckOutDate": "2024-01-06",
    "roomPrice": 170.0
  },
  {
    "id": 80,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.6,
    "CheckInDate": "2024-01-02",
    "CheckOutDate": "2024-01-07",
    "roomPrice": 180.0
  },
  {
    "id": 81,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2024-01-03",
    "CheckOutDate": "2024-01-08",
    "roomPrice": 150.0
  },
  {
    "id": 82,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2024-01-04",
    "CheckOutDate": "2024-01-09",
    "roomPrice": 190.0
  },
  {
    "id": 83,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2024-01-05",
    "CheckOutDate": "2024-01-10",
    "roomPrice": 170.0
  },
  {
    "id": 84,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2024-01-06",
    "CheckOutDate": "2024-01-11",
    "roomPrice": 175.0
  },
  {
    "id": 85,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2024-01-07",
    "CheckOutDate": "2024-01-12",
    "roomPrice": 160.0
  },
  {
    "id": 86,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2024-01-08",
    "CheckOutDate": "2024-01-13",
    "roomPrice": 190.0
  },
  {
    "id": 87,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2024-01-09",
    "CheckOutDate": "2024-01-14",
    "roomPrice": 170.0
  },
  {
    "id": 88,
    "hotelName": "Oslo Fjordside Resort",
    "hotelImageLink": "https://example.com/images/oslo_fjordside_resort.jpg",
    "hotelDestination": "Norway",
    "hotelRatings": 4.6,
    "CheckInDate": "2024-01-10",
    "CheckOutDate": "2024-01-15",
    "roomPrice": 175.0
  },
  {
    "id": 89,
    "hotelName": "Helsinki Northern Lights Hotel",
    "hotelImageLink": "https://example.com/images/helsinki_northern_lights_hotel.jpg",
    "hotelDestination": "Finland",
    "hotelRatings": 4.4,
    "CheckInDate": "2024-01-11",
    "CheckOutDate": "2024-01-16",
    "roomPrice": 160.0
  },
  {
    "id": 90,
    "hotelName": "Warsaw Royal Palace Hotel",
    "hotelImageLink": "https://example.com/images/warsaw_royal_palace_hotel.jpg",
    "hotelDestination": "Poland",
    "hotelRatings": 4.7,
    "CheckInDate": "2024-01-12",
    "CheckOutDate": "2024-01-17",
    "roomPrice": 190.0
  },
  {
    "id": 91,
    "hotelName": "Vienna Imperial Palace",
    "hotelImageLink": "https://example.com/images/vienna_imperial_palace.jpg",
    "hotelDestination": "Austria",
    "hotelRatings": 4.5,
    "CheckInDate": "2024-01-13",
    "CheckOutDate": "2024-01-18",
    "roomPrice": 170.0
  },
  {
    "id": 92,
    "hotelName": "Amsterdam Canal House",
    "hotelImageLink": "https://example.com/images/amsterdam_canal_house.jpg",
    "hotelDestination": "Netherlands",
    "hotelRatings": 4.6,
    "CheckInDate": "2024-01-14",
    "CheckOutDate": "2024-01-19",
    "roomPrice": 180.0
  },
  {
    "id": 93,
    "hotelName": "Dublin Green Valley Hotel",
    "hotelImageLink": "https://example.com/images/dublin_green_valley_hotel.jpg",
    "hotelDestination": "Ireland",
    "hotelRatings": 4.3,
    "CheckInDate": "2024-01-15",
    "CheckOutDate": "2024-01-20",
    "roomPrice": 150.0
  },
  {
    "id": 94,
    "hotelName": "Edinburgh Castle View Hotel",
    "hotelImageLink": "https://example.com/images/edinburgh_castle_view_hotel.jpg",
    "hotelDestination": "Scotland",
    "hotelRatings": 4.7,
    "CheckInDate": "2024-01-16",
    "CheckOutDate": "2024-01-21",
    "roomPrice": 190.0
  },
  {
    "id": 95,
    "hotelName": "Prague Old Town Inn",
    "hotelImageLink": "https://example.com/images/prague_old_town_inn.jpg",
    "hotelDestination": "Czech Republic",
    "hotelRatings": 4.5,
    "CheckInDate": "2024-01-17",
    "CheckOutDate": "2024-01-22",
    "roomPrice": 170.0
  },
  {
    "id": 96,
    "hotelName": "Berlin Riverfront Lodge",
    "hotelImageLink": "https://example.com/images/berlin_riverfront_lodge.jpg",
    "hotelDestination": "Germany",
    "hotelRatings": 4.6,
    "CheckInDate": "2024-01-18",
    "CheckOutDate": "2024-01-23",
    "roomPrice": 175.0
  },
  {
    "id": 97,
    "hotelName": "Budapest Thermal Spa Resort",
    "hotelImageLink": "https://example.com/images/budapest_thermal_spa_resort.jpg",
    "hotelDestination": "Hungary",
    "hotelRatings": 4.4,
    "CheckInDate": "2024-01-19",
    "CheckOutDate": "2024-01-24",
    "roomPrice": 160.0
  },
  {
    "id": 98,
    "hotelName": "Copenhagen Harbor View Hotel",
    "hotelImageLink": "https://example.com/images/copenhagen_harbor_view_hotel.jpg",
    "hotelDestination": "Denmark",
    "hotelRatings": 4.7,
    "CheckInDate": "2024-01-20",
    "CheckOutDate": "2024-01-25",
    "roomPrice": 190.0
  },
  {
    "id": 99,
    "hotelName": "Stockholm Nordic Retreat",
    "hotelImageLink": "https://example.com/images/stockholm_nordic_retreat.jpg",
    "hotelDestination": "Sweden",
    "hotelRatings": 4.5,
    "CheckInDate": "2024-01-21",
    "CheckOutDate": "2024-01-26",
    "roomPrice": 170.0
  }
]

  export default HotelData