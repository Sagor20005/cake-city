import BubbleMenu from '../../Animation/BubbleMenu.js'

export default function BubbleMenuCastomizer() {
  const items = [{
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: {
      bgColor: '#3b82f6',
      textColor: '#ffffff'
    }
  },
    {
      label: 'about',
      href: '/about',
      ariaLabel: 'About',
      rotation: 8,
      hoverStyles: {
        bgColor: '#10b981',
        textColor: '#ffffff'
      }
    },
    {
      label: 'Cakes',
      href: '/cakes',
      ariaLabel: 'Cakes',
      rotation: 8,
      hoverStyles: {
        bgColor: '#f59e0b',
        textColor: '#ffffff'
      }
    },
    {
      label: 'Gallary',
      href: '/gallary',
      ariaLabel: 'Blog',
      rotation: 8,
      hoverStyles: {
        bgColor: '#ef4444',
        textColor: '#ffffff'
      }
    },
    {
      label: 'contact',
      href: '/contact',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: {
        bgColor: '#8b5cf6',
        textColor: '#ffffff'
      }
    }];

  return(
    <>
      <BubbleMenu
        logo={<span style={ { fontWeight: 700 }}>CAKE CITY</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        />
    </>
  )

}