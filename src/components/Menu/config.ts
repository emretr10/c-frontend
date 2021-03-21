import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.cubdefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.cubdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Dens',
    icon: 'PoolIcon',
    href: '/dens',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      },
      {
        label: 'CoinGecko (Coming Soon)',
        href: '#',
      },
      {
        label: 'CoinMarketCap (Coming Soon)',
        href: '#',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.cubdefi.com/roadmap',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Audit by Hacken',
      //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
      // },
      {
        label: "Github",
        href: "https://github.com/CubFinance/",
      },
      // {
      //   label: "Docs",
      //   href: "https://goosedefi.gitbook.io/goose-finance/",
      // },
      {
        label: "Blog",
        href: "https://leofinance.io/@leofinance",
      },
    ],
  },
  {
    label: 'Docs',
    icon: 'TicketIcon',
    href: 'https://docs.cubdefi.com/',
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
]

export default config
