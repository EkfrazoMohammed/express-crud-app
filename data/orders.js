[
  {
    "id": "order1",
    "reference": "REF123456",
    "customer": {
      "address": "My home",
      "email": "demo@gmail.com",
      "name": "tayib"
    },
    "deliveryFee": 1,
    "items": "[{\"product\":{\"id\":\"1\",\"image\":\"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png\",\"images\":[\"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png\",\"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_1.png\",\"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_2.png\",\"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_3.png\",\"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_4.png\"],\"name\":\"Wild Berry\",\"price\":2,\"sizes\":[39,40,41],\"description\":\"Inspired by the original that debuted in 1985, the Air Jordan 1 Low delivers a clean, classic look that's familiar yet fresh. With an iconic design that blends seamlessly with any fit, these shoes are perfect for taking charge.\\n  \\n  Advantages:\\n  - Encapsulated Air-Sole unit for lightweight cushioning.\\n  - Genuine leather on the upper for durability and a premium look.\\n  - Solid rubber outsole for greater traction on different types of surfaces.\\n  - Color Shown: Palomino/White/Wild Berry\\n  - Model: 553558-215\\n  - Proven efficacy\\n  \\n  A timeless rubber sole combines with a soft sockliner and encapsulated Nike Air cushioning for all-day comfort. The rubber outsole offers durable traction on a variety of surfaces.\"},\"quantity\":1}]",
    "subtotal": 2,
    "total": 3,
    "status": "Payment success" // New status field
  },
  {
    "id": "order2",
    "reference": "REF123457",
    "customer": {
      "address": "Your home",
      "email": "sample@gmail.com",
      "name": "John Doe"
    },
    "deliveryFee": 2,
    "items": "[{\"product\":{\"id\":\"2\",\"image\":\"https://example.com/image2.png\",\"images\":[\"https://example.com/image2.png\",\"https://example.com/image2_1.png\"],\"name\":\"Product Name\",\"price\":5,\"sizes\":[42,43],\"description\":\"Product description here.\"},\"quantity\":2}]",
    "subtotal": 10,
    "total": 12,
    "status": "Out for delivery" // New status field
  },
  {
    "id": "order3",
    "reference": "REF123458",
    "customer": {
      "address": "Another address",
      "email": "example@gmail.com",
      "name": "Jane Doe"
    },
    "deliveryFee": 3,
    "items": "[{\"product\":{\"id\":\"3\",\"image\":\"https://example.com/image3.png\",\"images\":[\"https://example.com/image3.png\"],\"name\":\"Another Product\",\"price\":8,\"sizes\":[44],\"description\":\"Another product description.\"},\"quantity\":1}]",
    "subtotal": 8,
    "total": 11,
    "status": "Delivered" // New status field
  },
  {
    "id": "order4",
    "reference": "REF123459",
    "customer": {
      "address": "Some address",
      "email": "anotherexample@gmail.com",
      "name": "Alice Smith"
    },
    "deliveryFee": 0,
    "items": "[{\"product\":{\"id\":\"4\",\"image\":\"https://example.com/image4.png\",\"images\":[\"https://example.com/image4.png\"],\"name\":\"Yet Another Product\",\"price\":7,\"sizes\":[45],\"description\":\"Yet another product description.\"},\"quantity\":3}]",
    "subtotal": 21,
    "total": 22,
    "status": "Canceled" // New status field
  }
]
