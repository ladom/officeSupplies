const MainProps = {
  header: {
    logo: {
      href: 'link/to/home/page',
    },
    search: {
      button: {
        text: 'Search',
        href: 'http://localhost:3003/link/to/search/api',
      },
      input: {
        placeholder: 'Search products',
        a11y: 'Search input',
      },
    },
    cart: {
      icon: {
        a11y: 'Your cart',
      },
      products: {
        number: 0,
        description: 'st',
      },
      price: {
        sum: 0,
        currency: 'kr',
      },
      checkButton: {
        text: 'Check out',
      },
      description: 'Your cart content',
      emptyText: 'Your cart is empty',
      closeText: 'Close button',
    },
    navigation: {
      items: [
        {
          text: 'All our products',
          href: '#',
        },
        {
          text: 'Inspiration for the office',
          href: '#',
        },
        {
          text: 'About OS',
          href: '#',
        },
      ],
    },
  },
  content: {
    sideNavigation: [
      {
        text: 'Paper clips',
        href: '#',
      },
      {
        text: 'Post-it notes',
        href: '#',
      },
      {
        text: 'Staples',
        href: '#',
      },
      {
        text: 'Hole punches',
        href: '#',
      },
      {
        text: 'Binders',
        href: '#',
      },
      {
        text: 'Staplers',
        href: '#',
      },
      {
        text: 'Laminators',
        href: '#',
      },
      {
        text: 'Writing utensils',
        href: '#',
      },
      {
        text: 'Paper',
        href: '#',
      },
      {
        text: 'Computers',
        href: '#',
      },
      {
        text: 'Printers',
        href: '#',
      },
      {
        text: 'Fax machines',
        href: '#',
      },
      {
        text: 'Photocopiers',
        href: '#',
      },
      {
        text: 'Cash registers',
        href: '#',
      },
      {
        text: 'Office furniture',
        href: '#',
      },
      {
        text: 'Chairs',
        href: '#',
      },
      {
        text: 'Cubicles',
        href: '#',
      },
      {
        text: 'Filing cabinet',
        href: '#',
      },
      {
        text: 'Armoire desks',
        href: '#',
      },
    ],
    products: [
      {
        price: {
          newPrice: 565,
          oldPrice: 670,
          currency: 'kr',
        },
        name: 'Paper 1',
        id: 'product-1',
        image: {
          src: '/images/paper1.jpg',
          alt: 'Paper 1',
        },
        variants: [
          {
            value: 'white',
            label: 'White',
          },
          {
            value: 'yellow',
            label: 'Yellow',
          },
          {
            value: 'blue',
            label: 'Blue',
          },
        ],
        description: '<p>Paper 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
      },
      {
        price: {
          newPrice: 500,
          oldPrice: 620,
          currency: 'kr',
        },
        name: 'Paper 2',
        id: 'product-2',
        image: {
          src: '/images/paper2.jpg',
          alt: 'Paper 2',
        },
        variants: [
          {
            value: 'rose',
            label: 'Rose',
          },
          {
            value: 'violet',
            label: 'Violet',
          },
          {
            value: 'green',
            label: 'Green',
          },
        ],
        description: '<p>Description for paper 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
      },
      {
        price: {
          newPrice: 430,
          oldPrice: 550,
          currency: 'kr',
        },
        name: 'Paper 3',
        id: 'product-3',
        image: {
          src: '/images/paper3.jpg',
          alt: 'Paper 3',
        },
        variants: [],
        description: '<p>Paper 3 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
      },
    ],
    buyButton: {
      text: 'Buy',
    },
    readMoreButton: {
      moreText: 'Read more',
      lessText: 'Collapse',
    },
    inspirations: [
      {
        title: 'Paper is awesome',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.',
      },
      {
        title: 'Paper is awesome 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      },
      {
        title: 'Paper is awesome 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      },
      {
        title: 'Should not be displayed',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      },
    ],
  },
  footer: {
    logo: {
      href: 'link/to/home/page',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.',
    bestsellers: {
      heading: 'Bestsellers',
      items: [
        {
          text: 'A4',
          href: '#',
        },
        {
          text: 'A5',
          href: '#',
        },
        {
          text: 'Pens',
          href: '#',
        },
        {
          text: 'Staplers',
          href: '#',
        },
        {
          text: 'A4',
          href: '#',
        },
        {
          text: 'A5',
          href: '#',
        },
        {
          text: 'Pens',
          href: '#',
        },
        {
          text: 'Staplers',
          href: '#',
        },
      ],
    },
    social: {
      heading: 'We\'re social!',
      links: [
        {
          name: 'Facebook',
          href: '#',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M11.333 10.4h-3.333v5.467h3.333v16.133h6.4v-16.133h4.533l0.533-5.467h-4.933c0 0 0-2 0-3.067 0-1.333 0.267-1.733 1.467-1.733 0.933 0 3.467 0 3.467 0v-5.6c0 0-3.733 0-4.4 0-4.8 0-6.933 2.133-6.933 6.133-0.133 3.6-0.133 4.267-0.133 4.267z"></path></svg>',
        },
        {
          name: 'LinkedIn',
          href: '#',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M7.867 4c0 2.133-1.733 4-3.867 4-2.267-0.133-4-1.867-4-4s1.733-4 3.867-4c2.133 0 4 1.733 4 4zM7.2 10.667h-6.667v21.333h6.667v-21.333zM17.733 10.667h-6.267v21.333h6.4c0 0 0-7.867 0-11.2 0-2.933 1.333-4.8 4-4.8 2.4 0 3.6 1.733 3.6 4.8s0 11.2 0 11.2h6.533c0 0 0-7.733 0-13.467s-3.2-8.533-7.733-8.533c-4.533 0-6.4 3.467-6.4 3.467l-0.133-2.8z"></path></svg>',
        },
        {
          name: 'Twitter',
          href: '#',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M32 6.4c-1.2 0.533-2.4 0.933-3.733 1.067 1.333-0.8 2.4-2.133 2.8-3.6-1.333 0.8-2.667 1.333-4.133 1.6-1.2-1.333-2.933-2.133-4.8-2.133-4.267 0-7.333 4-6.4 8-5.467-0.267-10.267-2.8-13.467-6.8-1.733 2.933-0.933 6.8 2 8.8-1.067-0.133-2.133-0.4-2.933-0.8-0.133 3.067 2.133 5.867 5.2 6.533-0.933 0.267-2 0.267-2.933 0.133 0.8 2.667 3.2 4.533 6.133 4.533-2.8 2.133-6.267 3.067-9.733 2.667 2.933 1.867 6.4 2.933 10 2.933 12.133 0 19.067-10.267 18.667-19.467 1.333-0.933 2.4-2.133 3.333-3.467z"></path></svg>',
        },
      ],
    },
  },
};

export default MainProps;
