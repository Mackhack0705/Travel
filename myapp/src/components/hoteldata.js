const HotelData = [
    {
      "id": 1,
      "hotelName": "Sunset Beach Resort",
      "hotelImageLink": "https://example.com/images/hotel1.jpg",
      "destination": "New York",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-10-20",
      "CheckOutDate": "2023-10-25",
      "roomPrice": 180.0
    },
    {
      "id": 2,
      "hotelName": "Mountain View Lodge",
      "hotelImageLink": "https://example.com/images/hotel2.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-10-21",
      "CheckOutDate": "2023-10-24",
      "roomPrice": 150.0
    },
    {
      "id": 3,
      "hotelName": "Seaside Retreat",
      "hotelImageLink": "https://example.com/images/hotel3.jpg",
      "destination": "Beachfront Getaway",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-10-22",
      "CheckOutDate": "2023-10-26",
      "roomPrice": 190.0
    },
    {
      "id": 4,
      "hotelName": "City Center Hotel",
      "hotelImageLink": "https://example.com/images/hotel4.jpg",
      "destination": "Downtown City",
      "hotelRatings": 4.0,
      "CheckInDate": "2023-10-23",
      "CheckOutDate": "2023-10-27",
      "roomPrice": 130.0
    },
    {
      "id": 5,
      "hotelName": "Wilderness Resort",
      "hotelImageLink": "https://example.com/images/hotel5.jpg",
      "destination": "National Park",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-10-24",
      "CheckOutDate": "2023-10-29",
      "roomPrice": 170.0
    },
    {
      "id": 6,
      "hotelName": "Riverside Lodge",
      "hotelImageLink": "https://example.com/images/hotel6.jpg",
      "destination": "Riverfront Haven",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-10-25",
      "CheckOutDate": "2023-10-30",
      "roomPrice": 160.0
    },
    {
      "id": 7,
      "hotelName": "Urban Paradise Inn",
      "hotelImageLink": "https://example.com/images/hotel7.jpg",
      "destination": "City Oasis",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-10-26",
      "CheckOutDate": "2023-10-31",
      "roomPrice": 140.0
    },
    {
      "id": 8,
      "hotelName": "Hillside Retreat",
      "hotelImageLink": "https://example.com/images/hotel8.jpg",
      "destination": "Hill Station",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-10-27",
      "CheckOutDate": "2023-11-01",
      "roomPrice": 150.0
    },
    {
      "id": 9,
      "hotelName": "Desert Mirage Inn",
      "hotelImageLink": "https://example.com/images/hotel9.jpg",
      "destination": "Desert Oasis",
      "hotelRatings": 4.1,
      "CheckInDate": "2023-10-28",
      "CheckOutDate": "2023-11-02",
      "roomPrice": 120.0
    },
    {
      "id": 10,
      "hotelName": "Lakefront Villa",
      "hotelImageLink": "https://example.com/images/hotel10.jpg",
      "destination": "Lakeview Retreat",
      "hotelRatings": 4.8,
      "CheckInDate": "2023-10-29",
      "CheckOutDate": "2023-11-03",
      "roomPrice": 200.0
    },
    {
      "id": 11,
      "hotelName": "Jungle Safari Lodge",
      "hotelImageLink": "https://example.com/images/hotel11.jpg",
      "destination": "Wildlife Adventure",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-10-30",
      "CheckOutDate": "2023-11-04",
      "roomPrice": 170.0
    },
    {
      "id": 12,
      "hotelName": "Cozy Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel12.jpg",
      "destination": "Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-10-31",
      "CheckOutDate": "2023-11-05",
      "roomPrice": 155.0
    },
    {
      "id": 13,
      "hotelName": "Historic Mansion Hotel",
      "hotelImageLink": "https://example.com/images/hotel13.jpg",
      "destination": "Historical District",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-11-01",
      "CheckOutDate": "2023-11-06",
      "roomPrice": 135.0
    },
    {
      "id": 14,
      "hotelName": "Beachfront Resort",
      "hotelImageLink": "https://example.com/images/hotel14.jpg",
      "destination": "Beachside Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-11-02",
      "CheckOutDate": "2023-11-07",
      "roomPrice": 185.0
    },
    {
      "id": 15,
      "hotelName": "Mountain Lodge",
      "hotelImageLink": "https://example.com/images/hotel15.jpg",
      "destination": "Mountain Village",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-11-03",
      "CheckOutDate": "2023-11-08",
      "roomPrice": 160.0
    },
    {
      "id": 16,
      "hotelName": "Waterfront Oasis",
      "hotelImageLink": "https://example.com/images/hotel16.jpg",
      "destination": "Lakeside Getaway",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-11-04",
      "CheckOutDate": "2023-11-09",
      "roomPrice": 175.0
    },
    {
      "id": 17,
      "hotelName": "Countryside Inn",
      "hotelImageLink": "https://example.com/images/hotel17.jpg",
      "destination": "Rural Retreat",
      "hotelRatings": 4.1,
      "CheckInDate": "2023-11-05",
      "CheckOutDate": "2023-11-10",
      "roomPrice": 125.0
    },
    {
      "id": 18,
      "hotelName": "Seaview Resort",
      "hotelImageLink": "https://example.com/images/hotel18.jpg",
      "destination": "Coastal Getaway",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-11-06",
      "CheckOutDate": "2023-11-11",
      "roomPrice": 170.0
    },
    {
      "id": 19,
      "hotelName": "Cityscape Hotel",
      "hotelImageLink": "https://example.com/images/hotel19.jpg",
      "destination": "City Center",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-11-07",
      "CheckOutDate": "2023-11-12",
      "roomPrice": 145.0
    },
    {
      "id": 20,
      "hotelName": "Beachfront Villa",
      "hotelImageLink": "https://example.com/images/hotel20.jpg",
      "destination": "Sunny Beach Retreat",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-11-08",
      "CheckOutDate": "2023-11-13",
      "roomPrice": 185.0
    },
    {
      "id": 21,
      "hotelName": "Mountain Hideaway",
      "hotelImageLink": "https://example.com/images/hotel21.jpg",
      "destination": "Mountain Escape",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-11-09",
      "CheckOutDate": "2023-11-14",
      "roomPrice": 160.0
    },
    {
      "id": 22,
      "hotelName": "Riverside Lodge",
      "hotelImageLink": "https://example.com/images/hotel22.jpg",
      "destination": "Riverside Serenity",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-11-10",
      "CheckOutDate": "2023-11-15",
      "roomPrice": 170.0
    },
    {
      "id": 23,
      "hotelName": "Downtown Hotel",
      "hotelImageLink": "https://example.com/images/hotel23.jpg",
      "destination": "City Center",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-11-11",
      "CheckOutDate": "2023-11-16",
      "roomPrice": 140.0
    },
    {
      "id": 24,
      "hotelName": "Forest Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel24.jpg",
      "destination": "Wooded Paradise",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-11-12",
      "CheckOutDate": "2023-11-17",
      "roomPrice": 150.0
    },
    {
      "id": 25,
      "hotelName": "Oceanfront Resort",
      "hotelImageLink": "https://example.com/images/hotel25.jpg",
      "destination": "Beachfront Bliss",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-11-13",
      "CheckOutDate": "2023-11-18",
      "roomPrice": 190.0
    },
    {
      "id": 26,
      "hotelName": "Mountainview Hotel",
      "hotelImageLink": "https://example.com/images/hotel26.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-11-14",
      "CheckOutDate": "2023-11-19",
      "roomPrice": 170.0
    },
    {
      "id": 27,
      "hotelName": "Lakeside Lodge",
      "hotelImageLink": "https://example.com/images/hotel27.jpg",
      "destination": "Lakeside Retreat",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-11-15",
      "CheckOutDate": "2023-11-20",
      "roomPrice": 175.0
    },
    {
      "id": 28,
      "hotelName": "Countryside Inn",
      "hotelImageLink": "https://example.com/images/hotel28.jpg",
      "destination": "Rural Getaway",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-11-16",
      "CheckOutDate": "2023-11-21",
      "roomPrice": 140.0
    },
    {
      "id": 29,
      "hotelName": "Historic Mansion Hotel",
      "hotelImageLink": "https://example.com/images/hotel29.jpg",
      "destination": "Historical District",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-11-17",
      "CheckOutDate": "2023-11-22",
      "roomPrice": 150.0
    },
    {
      "id": 30,
      "hotelName": "Mountain Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel30.jpg",
      "destination": "Cozy Cabin",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-11-18",
      "CheckOutDate": "2023-11-23",
      "roomPrice": 160.0
    },
    {
      "id": 31,
      "hotelName": "Beachfront Villa",
      "hotelImageLink": "https://example.com/images/hotel31.jpg",
      "destination": "Sandy Beach Retreat",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-11-19",
      "CheckOutDate": "2023-11-24",
      "roomPrice": 185.0
    },
    {
      "id": 32,
      "hotelName": "Mountain Lodge",
      "hotelImageLink": "https://example.com/images/hotel32.jpg",
      "destination": "Mountain Village",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-11-20",
      "CheckOutDate": "2023-11-25",
      "roomPrice": 160.0
    },
    {
      "id": 33,
      "hotelName": "Waterfront Oasis",
      "hotelImageLink": "https://example.com/images/hotel33.jpg",
      "destination": "Lakefront Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-11-21",
      "CheckOutDate": "2023-11-26",
      "roomPrice": 180.0
    },
    {
      "id": 34,
      "hotelName": "Countryside Retreat",
      "hotelImageLink": "https://example.com/images/hotel34.jpg",
      "destination": "Rural Peace",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-11-22",
      "CheckOutDate": "2023-11-27",
      "roomPrice": 140.0
    },
    {
      "id": 35,
      "hotelName": "Seaview Resort",
      "hotelImageLink": "https://example.com/images/hotel35.jpg",
      "destination": "Coastal Paradise",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-11-23",
      "CheckOutDate": "2023-11-28",
      "roomPrice": 170.0
    },
    {
      "id": 36,
      "hotelName": "City Center Hotel",
      "hotelImageLink": "https://example.com/images/hotel36.jpg",
      "destination": "Downtown City",
      "hotelRatings": 4.1,
      "CheckInDate": "2023-11-24",
      "CheckOutDate": "2023-11-29",
      "roomPrice": 130.0
    },
    {
      "id": 37,
      "hotelName": "Beachfront Oasis",
      "hotelImageLink": "https://example.com/images/hotel37.jpg",
      "destination": "Beachside Bliss",
      "hotelRatings": 4.8,
      "CheckInDate": "2023-11-25",
      "CheckOutDate": "2023-11-30",
      "roomPrice": 200.0
    },
    {
      "id": 38,
      "hotelName": "Mountainview Lodge",
      "hotelImageLink": "https://example.com/images/hotel38.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-11-26",
      "CheckOutDate": "2023-12-01",
      "roomPrice": 170.0
    },
    {
      "id": 39,
      "hotelName": "Lakeside Villa",
      "hotelImageLink": "https://example.com/images/hotel39.jpg",
      "destination": "Lakeside Paradise",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-11-27",
      "CheckOutDate": "2023-12-02",
      "roomPrice": 175.0
    },
    {
      "id": 40,
      "hotelName": "Rural Retreat",
      "hotelImageLink": "https://example.com/images/hotel40.jpg",
      "destination": "Countryside Haven",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-11-28",
      "CheckOutDate": "2023-12-03",
      "roomPrice": 150.0
    },
    {
      "id": 41,
      "hotelName": "Beachfront Paradise Inn",
      "hotelImageLink": "https://example.com/images/hotel41.jpg",
      "destination": "Beachside Bliss",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-11-29",
      "CheckOutDate": "2023-12-04",
      "roomPrice": 185.0
    },
    {
      "id": 42,
      "hotelName": "Mountain Escape Lodge",
      "hotelImageLink": "https://example.com/images/hotel42.jpg",
      "destination": "Mountain Getaway",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-11-30",
      "CheckOutDate": "2023-12-05",
      "roomPrice": 160.0
    },
    {
      "id": 43,
      "hotelName": "Riverside Retreat",
      "hotelImageLink": "https://example.com/images/hotel43.jpg",
      "destination": "Riverfront Serenity",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-12-01",
      "CheckOutDate": "2023-12-06",
      "roomPrice": 170.0
    },
    {
      "id": 44,
      "hotelName": "City Center Inn",
      "hotelImageLink": "https://example.com/images/hotel44.jpg",
      "destination": "Downtown Bliss",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-12-02",
      "CheckOutDate": "2023-12-07",
      "roomPrice": 140.0
    },
    {
      "id": 45,
      "hotelName": "Mountain Cabin Resort",
      "hotelImageLink": "https://example.com/images/hotel45.jpg",
      "destination": "Cozy Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-12-03",
      "CheckOutDate": "2023-12-08",
      "roomPrice": 150.0
    },
    {
      "id": 46,
      "hotelName": "Oceanfront Bliss Hotel",
      "hotelImageLink": "https://example.com/images/hotel46.jpg",
      "destination": "Beachfront Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-12-04",
      "CheckOutDate": "2023-12-09",
      "roomPrice": 190.0
    },
    {
      "id": 47,
      "hotelName": "Mountainview Lodge",
      "hotelImageLink": "https://example.com/images/hotel47.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-12-05",
      "CheckOutDate": "2023-12-10",
      "roomPrice": 170.0
    },
    {
      "id": 48,
      "hotelName": "Lakeside Retreat",
      "hotelImageLink": "https://example.com/images/hotel48.jpg",
      "destination": "Lakeside Paradise",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-12-06",
      "CheckOutDate": "2023-12-11",
      "roomPrice": 175.0
    },
    {
      "id": 49,
      "hotelName": "Rural Getaway",
      "hotelImageLink": "https://example.com/images/hotel49.jpg",
      "destination": "Countryside Peace",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-12-07",
      "CheckOutDate": "2023-12-12",
      "roomPrice": 150.0
    },
    {
      "id": 50,
      "hotelName": "Beachside Resort",
      "hotelImageLink": "https://example.com/images/hotel50.jpg",
      "destination": "Sandy Beach Getaway",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-12-08",
      "CheckOutDate": "2023-12-13",
      "roomPrice": 185.0
    },
    {
      "id": 51,
      "hotelName": "Mountain Hideaway Lodge",
      "hotelImageLink": "https://example.com/images/hotel51.jpg",
      "destination": "Mountain Retreat",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-12-09",
      "CheckOutDate": "2023-12-14",
      "roomPrice": 160.0
    },
    {
      "id": 52,
      "hotelName": "Riverfront Serenity Inn",
      "hotelImageLink": "https://example.com/images/hotel52.jpg",
      "destination": "Riverfront Peace",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-12-10",
      "CheckOutDate": "2023-12-15",
      "roomPrice": 170.0
    },
    {
      "id": 53,
      "hotelName": "Downtown Hotel",
      "hotelImageLink": "https://example.com/images/hotel53.jpg",
      "destination": "City Center",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-12-11",
      "CheckOutDate": "2023-12-16",
      "roomPrice": 140.0
    },
    {
      "id": 54,
      "hotelName": "Mountain Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel54.jpg",
      "destination": "Cozy Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-12-12",
      "CheckOutDate": "2023-12-17",
      "roomPrice": 150.0
    },
    {
      "id": 55,
      "hotelName": "Oceanfront Bliss Resort",
      "hotelImageLink": "https://example.com/images/hotel55.jpg",
      "destination": "Beachfront Getaway",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-12-13",
      "CheckOutDate": "2023-12-18",
      "roomPrice": 190.0
    },
    {
      "id": 56,
      "hotelName": "Mountainview Lodge",
      "hotelImageLink": "https://example.com/images/hotel56.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-12-14",
      "CheckOutDate": "2023-12-19",
      "roomPrice": 170.0
    },
    {
      "id": 57,
      "hotelName": "Lakeside Paradise Resort",
      "hotelImageLink": "https://example.com/images/hotel57.jpg",
      "destination": "Lakeside Bliss",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-12-15",
      "CheckOutDate": "2023-12-20",
      "roomPrice": 175.0
    },
    {
      "id": 58,
      "hotelName": "Rural Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel58.jpg",
      "destination": "Countryside Getaway",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-12-16",
      "CheckOutDate": "2023-12-21",
      "roomPrice": 150.0
    },
    {
      "id": 59,
      "hotelName": "Beachside Resort",
      "hotelImageLink": "https://example.com/images/hotel59.jpg",
      "destination": "Sandy Beach Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-12-17",
      "CheckOutDate": "2023-12-22",
      "roomPrice": 185.0
    },
    {
      "id": 60,
      "hotelName": "Mountain Retreat Lodge",
      "hotelImageLink": "https://example.com/images/hotel60.jpg",
      "destination": "Mountain Getaway",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-12-18",
      "CheckOutDate": "2023-12-23",
      "roomPrice": 160.0
    },
    {
      "id": 61,
      "hotelName": "Riverfront Serenity Inn",
      "hotelImageLink": "https://example.com/images/hotel61.jpg",
      "destination": "Riverfront Peace",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-12-19",
      "CheckOutDate": "2023-12-24",
      "roomPrice": 170.0
    },
    {
      "id": 62,
      "hotelName": "Downtown Hotel",
      "hotelImageLink": "https://example.com/images/hotel62.jpg",
      "destination": "City Center Bliss",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-12-20",
      "CheckOutDate": "2023-12-25",
      "roomPrice": 140.0
    },
    {
      "id": 63,
      "hotelName": "Mountain Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel63.jpg",
      "destination": "Cozy Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-12-21",
      "CheckOutDate": "2023-12-26",
      "roomPrice": 150.0
    },
    {
      "id": 64,
      "hotelName": "Oceanfront Bliss Resort",
      "hotelImageLink": "https://example.com/images/hotel64.jpg",
      "destination": "Beachfront Getaway",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-12-22",
      "CheckOutDate": "2023-12-27",
      "roomPrice": 190.0
    },
    {
      "id": 65,
      "hotelName": "Mountainview Lodge",
      "hotelImageLink": "https://example.com/images/hotel65.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-12-23",
      "CheckOutDate": "2023-12-28",
      "roomPrice": 170.0
    },
    {
      "id": 66,
      "hotelName": "Lakeside Paradise Resort",
      "hotelImageLink": "https://example.com/images/hotel66.jpg",
      "destination": "Lakeside Bliss",
      "hotelRatings": 4.6,
      "CheckInDate": "2023-12-24",
      "CheckOutDate": "2023-12-29",
      "roomPrice": 175.0
    },
    {
      "id": 67,
      "hotelName": "Rural Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel67.jpg",
      "destination": "Countryside Getaway",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-12-25",
      "CheckOutDate": "2023-12-30",
      "roomPrice": 150.0
    },
    {
      "id": 68,
      "hotelName": "Beachside Resort",
      "hotelImageLink": "https://example.com/images/hotel68.jpg",
      "destination": "Sandy Beach Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-12-26",
      "CheckOutDate": "2023-12-31",
      "roomPrice": 185.0
    },
    {
      "id": 69,
      "hotelName": "Mountain Retreat Lodge",
      "hotelImageLink": "https://example.com/images/hotel69.jpg",
      "destination": "Mountain Getaway",
      "hotelRatings": 4.4,
      "CheckInDate": "2023-12-27",
      "CheckOutDate": "2024-01-01",
      "roomPrice": 160.0
    },
    {
      "id": 70,
      "hotelName": "Riverfront Serenity Inn",
      "hotelImageLink": "https://example.com/images/hotel70.jpg",
      "destination": "Riverfront Peace",
      "hotelRatings": 4.5,
      "CheckInDate": "2023-12-28",
      "CheckOutDate": "2024-01-02",
      "roomPrice": 170.0
    },
    {
      "id": 71,
      "hotelName": "Downtown Hotel",
      "hotelImageLink": "https://example.com/images/hotel71.jpg",
      "destination": "City Center Bliss",
      "hotelRatings": 4.2,
      "CheckInDate": "2023-12-29",
      "CheckOutDate": "2024-01-03",
      "roomPrice": 140.0
    },
    {
      "id": 72,
      "hotelName": "Mountain Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel72.jpg",
      "destination": "Cozy Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2023-12-30",
      "CheckOutDate": "2024-01-04",
      "roomPrice": 150.0
    },
    {
      "id": 73,
      "hotelName": "Oceanfront Bliss Resort",
      "hotelImageLink": "https://example.com/images/hotel73.jpg",
      "destination": "Beachfront Getaway",
      "hotelRatings": 4.7,
      "CheckInDate": "2023-12-31",
      "CheckOutDate": "2024-01-05",
      "roomPrice": 190.0
    },
    {
      "id": 74,
      "hotelName": "Mountainview Lodge",
      "hotelImageLink": "https://example.com/images/hotel74.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2024-01-01",
      "CheckOutDate": "2024-01-06",
      "roomPrice": 170.0
    },
    {
      "id": 75,
      "hotelName": "Lakeside Paradise Resort",
      "hotelImageLink": "https://example.com/images/hotel75.jpg",
      "destination": "Lakeside Bliss",
      "hotelRatings": 4.6,
      "CheckInDate": "2024-01-02",
      "CheckOutDate": "2024-01-07",
      "roomPrice": 175.0
    },
    {
      "id": 76,
      "hotelName": "Rural Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel76.jpg",
      "destination": "Countryside Getaway",
      "hotelRatings": 4.3,
      "CheckInDate": "2024-01-03",
      "CheckOutDate": "2024-01-08",
      "roomPrice": 150.0
    },
    {
      "id": 77,
      "hotelName": "Beachside Resort",
      "hotelImageLink": "https://example.com/images/hotel77.jpg",
      "destination": "Sandy Beach Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2024-01-04",
      "CheckOutDate": "2024-01-09",
      "roomPrice": 185.0
    },
    {
      "id": 78,
      "hotelName": "Mountain Retreat Lodge",
      "hotelImageLink": "https://example.com/images/hotel78.jpg",
      "destination": "Mountain Getaway",
      "hotelRatings": 4.4,
      "CheckInDate": "2024-01-05",
      "CheckOutDate": "2024-01-10",
      "roomPrice": 160.0
    },
    {
      "id": 79,
      "hotelName": "Riverfront Serenity Inn",
      "hotelImageLink": "https://example.com/images/hotel79.jpg",
      "destination": "Riverfront Peace",
      "hotelRatings": 4.5,
      "CheckInDate": "2024-01-06",
      "CheckOutDate": "2024-01-11",
      "roomPrice": 170.0
    },
    {
      "id": 80,
      "hotelName": "Downtown Hotel",
      "hotelImageLink": "https://example.com/images/hotel80.jpg",
      "destination": "City Center Bliss",
      "hotelRatings": 4.2,
      "CheckInDate": "2024-01-07",
      "CheckOutDate": "2024-01-12",
      "roomPrice": 140.0
    },
    {
      "id": 81,
      "hotelName": "Mountain Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel81.jpg",
      "destination": "Cozy Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2024-01-08",
      "CheckOutDate": "2024-01-13",
      "roomPrice": 150.0
    },
    {
      "id": 82,
      "hotelName": "Oceanfront Bliss Resort",
      "hotelImageLink": "https://example.com/images/hotel82.jpg",
      "destination": "Beachfront Getaway",
      "hotelRatings": 4.7,
      "CheckInDate": "2024-01-09",
      "CheckOutDate": "2024-01-14",
      "roomPrice": 190.0
    },
    {
      "id": 83,
      "hotelName": "Mountainview Lodge",
      "hotelImageLink": "https://example.com/images/hotel83.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2024-01-10",
      "CheckOutDate": "2024-01-15",
      "roomPrice": 170.0
    },
    {
      "id": 84,
      "hotelName": "Lakeside Paradise Resort",
      "hotelImageLink": "https://example.com/images/hotel84.jpg",
      "destination": "Lakeside Bliss",
      "hotelRatings": 4.6,
      "CheckInDate": "2024-01-11",
      "CheckOutDate": "2024-01-16",
      "roomPrice": 175.0
    },
    {
      "id": 85,
      "hotelName": "Rural Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel85.jpg",
      "destination": "Countryside Getaway",
      "hotelRatings": 4.3,
      "CheckInDate": "2024-01-12",
      "CheckOutDate": "2024-01-17",
      "roomPrice": 150.0
    },
    {
      "id": 86,
      "hotelName": "Beachside Resort",
      "hotelImageLink": "https://example.com/images/hotel86.jpg",
      "destination": "Sandy Beach Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2024-01-13",
      "CheckOutDate": "2024-01-18",
      "roomPrice": 185.0
    },
    {
      "id": 87,
      "hotelName": "Mountain Retreat Lodge",
      "hotelImageLink": "https://example.com/images/hotel87.jpg",
      "destination": "Mountain Getaway",
      "hotelRatings": 4.4,
      "CheckInDate": "2024-01-14",
      "CheckOutDate": "2024-01-19",
      "roomPrice": 160.0
    },
    {
      "id": 88,
      "hotelName": "Riverfront Serenity Inn",
      "hotelImageLink": "https://example.com/images/hotel88.jpg",
      "destination": "Riverfront Peace",
      "hotelRatings": 4.5,
      "CheckInDate": "2024-01-15",
      "CheckOutDate": "2024-01-20",
      "roomPrice": 170.0
    },
    {
      "id": 89,
      "hotelName": "Downtown Hotel",
      "hotelImageLink": "https://example.com/images/hotel89.jpg",
      "destination": "City Center Bliss",
      "hotelRatings": 4.2,
      "CheckInDate": "2024-01-16",
      "CheckOutDate": "2024-01-21",
      "roomPrice": 140.0
    },
    {
      "id": 90,
      "hotelName": "Mountain Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel90.jpg",
      "destination": "Cozy Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2024-01-17",
      "CheckOutDate": "2024-01-22",
      "roomPrice": 150.0
    },
    {
      "id": 91,
      "hotelName": "Oceanfront Bliss Resort",
      "hotelImageLink": "https://example.com/images/hotel91.jpg",
      "destination": "Beachfront Getaway",
      "hotelRatings": 4.7,
      "CheckInDate": "2024-01-18",
      "CheckOutDate": "2024-01-23",
      "roomPrice": 190.0
    },
    {
      "id": 92,
      "hotelName": "Mountainview Lodge",
      "hotelImageLink": "https://example.com/images/hotel92.jpg",
      "destination": "Scenic Mountains",
      "hotelRatings": 4.5,
      "CheckInDate": "2024-01-19",
      "CheckOutDate": "2024-01-24",
      "roomPrice": 170.0
    },
    {
      "id": 93,
      "hotelName": "Lakeside Paradise Resort",
      "hotelImageLink": "https://example.com/images/hotel93.jpg",
      "destination": "Lakeside Bliss",
      "hotelRatings": 4.6,
      "CheckInDate": "2024-01-20",
      "CheckOutDate": "2024-01-25",
      "roomPrice": 175.0
    },
    {
      "id": 94,
      "hotelName": "Rural Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel94.jpg",
      "destination": "Countryside Getaway",
      "hotelRatings": 4.3,
      "CheckInDate": "2024-01-21",
      "CheckOutDate": "2024-01-26",
      "roomPrice": 150.0
    },
    {
      "id": 95,
      "hotelName": "Beachside Resort",
      "hotelImageLink": "https://example.com/images/hotel95.jpg",
      "destination": "Sandy Beach Paradise",
      "hotelRatings": 4.7,
      "CheckInDate": "2024-01-22",
      "CheckOutDate": "2024-01-27",
      "roomPrice": 185.0
    },
    {
      "id": 96,
      "hotelName": "Mountain Retreat Lodge",
      "hotelImageLink": "https://example.com/images/hotel96.jpg",
      "destination": "Mountain Getaway",
      "hotelRatings": 4.4,
      "CheckInDate": "2024-01-23",
      "CheckOutDate": "2024-01-28",
      "roomPrice": 160.0
    },
    {
      "id": 97,
      "hotelName": "Riverfront Serenity Inn",
      "hotelImageLink": "https://example.com/images/hotel97.jpg",
      "destination": "Riverfront Peace",
      "hotelRatings": 4.5,
      "CheckInDate": "2024-01-24",
      "CheckOutDate": "2024-01-29",
      "roomPrice": 170.0
    },
    {
      "id": 98,
      "hotelName": "Downtown Hotel",
      "hotelImageLink": "https://example.com/images/hotel98.jpg",
      "destination": "City Center Bliss",
      "hotelRatings": 4.2,
      "CheckInDate": "2024-01-25",
      "CheckOutDate": "2024-01-30",
      "roomPrice": 140.0
    },
    {
      "id": 99,
      "hotelName": "Mountain Cabin Retreat",
      "hotelImageLink": "https://example.com/images/hotel99.jpg",
      "destination": "Cozy Mountain Cabin",
      "hotelRatings": 4.3,
      "CheckInDate": "2024-01-26",
      "CheckOutDate": "2024-01-31",
      "roomPrice": 150.0
    }
  ]

  export default HotelData