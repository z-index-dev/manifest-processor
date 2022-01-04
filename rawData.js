const rawData = [
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 1,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 2,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 3,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 4,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 4,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 4,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 4,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 4,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 4,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 5,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 5,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 5,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 5,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 5,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 5,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 6,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 6,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 6,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 6,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 6,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 6,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 7,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 7,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 7,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 7,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 7,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 7,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 8,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 9,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 10,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 10,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 10,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 10,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 10,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 10,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 11,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 11,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 11,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 11,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 11,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 11,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 12,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 12,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 12,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 12,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 12,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 12,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 13,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 13,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 13,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 13,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 13,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 13,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 14,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 14,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 14,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 14,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 14,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 14,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 15,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 15,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 15,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 15,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 15,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 15,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 16,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 16,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 16,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 16,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 16,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 16,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 17,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 17,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 17,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 17,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 17,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 17,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 18,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 18,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 18,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 18,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 18,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 18,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 19,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 19,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 19,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 19,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 19,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 19,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 20,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 20,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 20,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 20,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 20,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 20,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 21,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 21,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 21,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 21,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 21,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 21,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 22,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 22,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 22,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 22,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 22,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 22,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 23,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 24,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 25,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 25,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 25,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 25,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 25,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 25,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 26,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 26,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 26,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 26,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 26,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 26,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 27,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 27,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 27,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 27,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 27,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 27,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 28,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 28,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 28,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 28,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 28,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 28,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 29,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 30,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 1,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 2,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 3,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 4,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 5,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 6,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 7,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "1510 Reserve",
    "Section": 31,
    "Row": 1,
    "Seat": 8,
    "Price Level": "Theatre Box"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 6,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 11,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 25,
    "Seat": 21,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 21,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 26,
    "Seat": 22,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 27,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 28,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 29,
    "Seat": 16,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 30,
    "Seat": 16,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 16,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 17,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 18,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 19,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": 31,
    "Seat": 20,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 1,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 2,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 3,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 4,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 5,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 6,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 7,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 8,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 9,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 10,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 11,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 12,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 13,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 14,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "B",
    "Seat": 15,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 1,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 2,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 3,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 4,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 5,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 6,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 7,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 8,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 9,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 10,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 11,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 12,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 13,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 14,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "C",
    "Seat": 15,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "D",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "E",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "F",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "G",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "H",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "J",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "K",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 11,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 12,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 13,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 14,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "L",
    "Seat": 15,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 101,
    "Row": "M",
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 15,
    "Seat": 17,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 16,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 17,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 18,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 19,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 20,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 21,
    "Seat": 24,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 22,
    "Seat": 24,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 23,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 24,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 25,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 26,
    "Seat": 28,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 27,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 28,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 29,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 30,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 102,
    "Row": 31,
    "Seat": 28,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 10,
    "Seat": 13,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 12,
    "Seat": 15,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 13,
    "Seat": 15,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 14,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 15,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 16,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 17,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 18,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 19,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 20,
    "Seat": 23,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 23,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 21,
    "Seat": 24,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 22,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 23,
    "Seat": 26,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 26,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": 24,
    "Seat": 27,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 11,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 12,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 13,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 14,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 15,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 16,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 17,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 18,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 19,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 103,
    "Row": "WC25",
    "Seat": 20,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 104,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 1,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 1,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 1,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 1,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 1,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 105,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 1,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 2,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 3,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 4,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 5,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 6,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 7,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 8,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 9,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 10,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 11,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 12,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 13,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 14,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 106,
    "Row": "WC25",
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 1,
    "Seat": 18,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 2,
    "Seat": 18,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 3,
    "Seat": 18,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 4,
    "Seat": 18,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 5,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 6,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 7,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 8,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 17,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 9,
    "Seat": 18,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 17,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 10,
    "Seat": 18,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 17,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 11,
    "Seat": 18,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 17,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 12,
    "Seat": 18,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 17,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 13,
    "Seat": 18,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 17,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 14,
    "Seat": 18,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 17,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 15,
    "Seat": 18,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 16,
    "Seat": 18,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 107,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 1,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 2,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 3,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 4,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 5,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 6,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 7,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 8,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 9,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 10,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 11,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 12,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 13,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 14,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 108,
    "Row": "WC25",
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 1,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 1,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 1,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 1,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 1,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 109,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 110,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 10,
    "Seat": 13,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 15,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 12,
    "Seat": 16,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 15,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 16,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 13,
    "Seat": 17,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 14,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 15,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 16,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 17,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 18,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 19,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 20,
    "Seat": 23,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 23,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 21,
    "Seat": 24,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 22,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 23,
    "Seat": 26,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 26,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": 24,
    "Seat": 27,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 11,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 12,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 13,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 14,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 15,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 16,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 17,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 18,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 19,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 111,
    "Row": "WC25",
    "Seat": 20,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 15,
    "Seat": 17,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 16,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 17,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 18,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 19,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 20,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 21,
    "Seat": 24,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 22,
    "Seat": 24,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 23,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 24,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 25,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 26,
    "Seat": 28,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 27,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 28,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 29,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 30,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 28,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 29,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 112,
    "Row": 31,
    "Seat": 30,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 6,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 11,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 25,
    "Seat": 21,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 1,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 2,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 3,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 4,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 5,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 6,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 7,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 8,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 9,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 10,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 11,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 12,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 13,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 14,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 15,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 16,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 17,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 18,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 19,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 20,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 21,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 26,
    "Seat": 22,
    "Price Level": "P7-F Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 27,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 28,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 29,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 30,
    "Seat": 16,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 1,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 2,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 3,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 4,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 5,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 6,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 7,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 8,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 9,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 10,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 11,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 12,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 13,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 14,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 15,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 16,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 17,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 18,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 19,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": 31,
    "Seat": 20,
    "Price Level": "P7-G Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 1,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 2,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 3,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 4,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 5,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 6,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 7,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 8,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 9,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 10,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 11,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 12,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 13,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 14,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "B",
    "Seat": 15,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 1,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 2,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 3,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 4,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 5,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 6,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 7,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 8,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 9,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 10,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 11,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 12,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 13,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 14,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "C",
    "Seat": 15,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "D",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "E",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "F",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "G",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "H",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "J",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "K",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 11,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 12,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 13,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 14,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "L",
    "Seat": 15,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 11,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 12,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 13,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 14,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 113,
    "Row": "M",
    "Seat": 15,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P7-E Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 1,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 2,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 3,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 4,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 5,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 6,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 7,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 8,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 9,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 10,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 11,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 12,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 13,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 14,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 15,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 16,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 17,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 18,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 19,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 20,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 25,
    "Seat": 21,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 1,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 2,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 3,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 4,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 5,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 6,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 7,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 8,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 9,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 10,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 11,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 12,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 13,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 14,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 15,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 16,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 17,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 18,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 19,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 20,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 21,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 26,
    "Seat": 22,
    "Price Level": "P7-F Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 1,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 2,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 3,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 4,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 5,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 6,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 7,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 8,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 9,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 10,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 11,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 12,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 13,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 14,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 27,
    "Seat": 15,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 1,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 2,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 3,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 4,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 5,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 6,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 7,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 8,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 9,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 10,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 11,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 12,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 13,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 14,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 28,
    "Seat": 15,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 1,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 2,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 3,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 4,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 5,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 6,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 7,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 8,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 9,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 10,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 11,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 12,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 13,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 14,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 15,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 29,
    "Seat": 16,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 1,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 2,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 3,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 4,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 5,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 6,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 7,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 8,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 9,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 10,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 11,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 12,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 13,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 14,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 15,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 30,
    "Seat": 16,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 1,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 2,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 3,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 4,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 5,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 6,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 7,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 8,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 9,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 10,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 11,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 12,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 13,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 14,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 15,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 16,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 17,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 18,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 19,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": 31,
    "Seat": 20,
    "Price Level": "P7-G Red Rowdies"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 1,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 2,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 3,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 4,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 5,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 6,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 7,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 8,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 9,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 10,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 11,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 12,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 13,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 14,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "B",
    "Seat": 15,
    "Price Level": "P5-B Lower Endzone Row B"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 1,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 2,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 3,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 4,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 5,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 6,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 7,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 8,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 9,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 10,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 11,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 12,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 13,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 14,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "C",
    "Seat": 15,
    "Price Level": "P5-D Lower Endzone Row C"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "D",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "E",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 1,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 2,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 3,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 4,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 5,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 6,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 7,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 8,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 9,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 10,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 11,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 12,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 13,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 14,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "F",
    "Seat": 15,
    "Price Level": "P7-A Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "G",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "H",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "J",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 1,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 2,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 3,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 4,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 5,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 6,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 7,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 8,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 9,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 10,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 11,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 12,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 13,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 14,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "K",
    "Seat": 15,
    "Price Level": "P7-AA Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 10,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 11,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 12,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 13,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 14,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "L",
    "Seat": 15,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 8,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 114,
    "Row": "M",
    "Seat": 9,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P7-B Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 15,
    "Seat": 17,
    "Price Level": "P7-C Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 16,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 17,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 18,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 19,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 20,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 21,
    "Seat": 24,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 21,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 22,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 23,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 22,
    "Seat": 24,
    "Price Level": "P7-D Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 23,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 24,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 25,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 26,
    "Seat": 28,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 27,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 28,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 29,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 30,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 1,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 2,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 3,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 4,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 5,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 6,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 7,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 8,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 9,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 10,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 11,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 12,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 13,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 14,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 15,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 16,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 17,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 18,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 19,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 20,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 21,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 22,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 23,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 24,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 25,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 26,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 27,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 28,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 29,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 115,
    "Row": 31,
    "Seat": 30,
    "Price Level": "P7-E Lower End Zone"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 3,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 9,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 10,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 11,
    "Seat": 15,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 15,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 12,
    "Seat": 16,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 15,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 16,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 13,
    "Seat": 17,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 14,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 15,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 16,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 17,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 18,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 19,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 20,
    "Seat": 23,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 17,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 18,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 19,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 20,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 21,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 22,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 23,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 21,
    "Seat": 24,
    "Price Level": "P6-D Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 22,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 23,
    "Seat": 26,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 17,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 18,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 19,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 20,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 21,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 22,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 23,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 24,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 25,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 26,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": 24,
    "Seat": 27,
    "Price Level": "P6-E Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 11,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 12,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 13,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 14,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 15,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 16,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 17,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 18,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 19,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 116,
    "Row": "WC25",
    "Seat": 20,
    "Price Level": "P6-F Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P6-A Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P6-AA Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P6-B Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 117,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P6-C Lower Corner"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P5-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 118,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P5-F Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 1,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 2,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 3,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 4,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 5,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 6,
    "Seat": 16,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 7,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 8,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 9,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 10,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 1,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 2,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 3,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 4,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 5,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 6,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 7,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 8,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 9,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 10,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 11,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 12,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 13,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 14,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 15,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 11,
    "Seat": 16,
    "Price Level": "P4-D Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 12,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 13,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 14,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 15,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 1,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 2,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 3,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 4,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 5,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 6,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 7,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 8,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 9,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 10,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 11,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 12,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 13,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 14,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 15,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 16,
    "Seat": 16,
    "Price Level": "P5-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 17,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 18,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 19,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 20,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 1,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 2,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 3,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 4,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 5,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 6,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 7,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 8,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 9,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 10,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 11,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 12,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 13,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 14,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 15,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 21,
    "Seat": 16,
    "Price Level": "P5-AA Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 22,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 23,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 13,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 14,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 15,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": 24,
    "Seat": 16,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 1,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 2,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 3,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 4,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 5,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 6,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 7,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 8,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 9,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 10,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 11,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 119,
    "Row": "WC25",
    "Seat": 12,
    "Price Level": "P5-E Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 1,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 2,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 3,
    "Seat": 18,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 1,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 2,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 3,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 4,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 5,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 6,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 7,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 8,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 9,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 10,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 11,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 12,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 13,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 14,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 15,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 16,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 17,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 4,
    "Seat": 18,
    "Price Level": "P4-A Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 5,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 6,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 7,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 1,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 2,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 3,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 4,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 5,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 6,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 7,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 8,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 9,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 10,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 11,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 12,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 13,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 14,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 15,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 16,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 17,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 8,
    "Seat": 18,
    "Price Level": "P4-B Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 1,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 2,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 3,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 4,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 5,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 6,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 7,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 8,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 9,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 10,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 11,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 12,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 13,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 14,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 15,
    "Price Level": "P4-C Club"
  },
  {
    "Neighborhood": "Arena Admission",
    "Section": 120,
    "Row": 9,
    "Seat": 16,
  },
  {
  },
