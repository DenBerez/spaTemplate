export const layouts = {
  modern: {
    appBar: {
      position: "fixed",
      elevation: 0,
      transparent: true,
      blur: true,
      height: 64,
    },
    container: {
      maxWidth: 'lg',
      spacing: { xs: 4, sm: 6, md: 8 },
      gutter: { xs: 2, sm: 3, md: 4 }
    },
    hero: {
      fullHeight: true,
      curved: false,
      gradient: true,
      floating: true,
      minHeight: { xs: '100vh', md: '90vh' },
      spacing: { xs: 6, sm: 8, md: 12 }
    },
    features: {
      style: 'grid',
      spacing: { xs: 3, sm: 4, md: 4 },
      columns: { xs: 12, sm: 6, md: 4 },
      animation: 'fade-up'
    },
    borderRadius: {
      small: { xs: 4, sm: 6, md: 8 },
      medium: { xs: 8, sm: 12, md: 16 },
      large: { xs: 12, sm: 16, md: 24 }
    },
    contact: {
      style: 'split',
      maxWidth: 'lg',
      spacing: 4,
      boxed: true
    },
    newsletter: {
      style: 'floating',
      maxWidth: 'md',
      spacing: 6,
      gradient: true
    },
    faq: {
      style: 'grid',
      maxWidth: 'lg',
      spacing: 4,
      columns: { xs: 1, md: 2 }
    },
    footer: {
      style: 'modern',
      spacing: 8,
      waves: true
    }
  },

  minimal: {
    appBar: {
      position: "sticky",
      elevation: 0,
      transparent: false,
      blur: false,
    },
    container: {
      maxWidth: 'md',
      spacing: 6,
      gutter: 2
    },
    hero: {
      fullHeight: false,
      curved: false,
      gradient: false,
      floating: false
    },
    features: {
      style: 'list',
      spacing: 3,
      columns: { xs: 1, md: 1 },
      animation: 'fade'
    },
    borderRadius: {
      small: 0,
      medium: 0,
      large: 0
    },
    contact: {
      style: 'simple',
      maxWidth: 'sm',
      spacing: 3,
      boxed: false
    },
    newsletter: {
      style: 'minimal',
      maxWidth: 'sm',
      spacing: 4,
      gradient: false
    },
    faq: {
      style: 'list',
      maxWidth: 'md',
      spacing: 2,
      columns: { xs: 1, md: 1 }
    },
    footer: {
      style: 'minimal',
      spacing: 4,
      waves: false
    }
  },

  creative: {
    appBar: {
      position: "fixed",
      elevation: 0,
      transparent: true,
      blur: true,
    },
    container: {
      maxWidth: 'xl',
      spacing: 12,
      gutter: 6
    },
    hero: {
      fullHeight: true,
      curved: true,
      gradient: true,
      floating: true
    },
    features: {
      style: 'grid',
      spacing: 8,
      columns: { xs: 12, sm: 6, md: 4 },
      animation: 'fadeInUp'
    },
    borderRadius: {
      small: 12,
      medium: 24,
      large: 32
    },
    contact: {
      style: 'floating',
      maxWidth: 'lg',
      spacing: 6,
      boxed: true
    },
    newsletter: {
      style: 'card',
      maxWidth: 'md',
      spacing: 8,
      gradient: true
    },
    faq: {
      style: 'grid',
      maxWidth: 'lg',
      spacing: 6,
      columns: { xs: 12, sm: 6, md: 4 }
    },
    footer: {
      style: 'creative',
      spacing: 10,
      waves: true
    }
  },

  enterprise: {
    appBar: {
      position: "sticky",
      elevation: 1,
      transparent: false,
      blur: false,
    },
    container: {
      maxWidth: 'lg',
      spacing: 8,
      gutter: 4
    },
    hero: {
      fullHeight: false,
      curved: false,
      gradient: true,
      floating: false
    },
    features: {
      style: 'cards',
      spacing: 4,
      columns: { xs: 1, sm: 2, md: 3 },
      animation: 'slide'
    },
    borderRadius: {
      small: 4,
      medium: 8,
      large: 12
    },
    contact: {
      style: 'professional',
      maxWidth: 'lg',
      spacing: 4,
      boxed: true
    },
    newsletter: {
      style: 'embedded',
      maxWidth: 'md',
      spacing: 6,
      gradient: false
    },
    faq: {
      style: 'panels',
      maxWidth: 'lg',
      spacing: 3,
      columns: { xs: 1, md: 1 }
    },
    footer: {
      style: 'enterprise',
      spacing: 6,
      waves: false
    }
  },

  contemporary: {
    appBar: {
      position: "fixed",
      elevation: 2,
      transparent: false,
      blur: true,
    },
    container: {
      maxWidth: 'lg',
      spacing: 12,
      gutter: 3
    },
    hero: {
      fullHeight: true,
      curved: true,
      gradient: true,
      floating: false
    },
    features: {
      style: 'alternating',
      spacing: 8,
      columns: { xs: 1, sm: 2, md: 2 },
      animation: 'fade-up'
    },
    borderRadius: {
      small: 16,
      medium: 24,
      large: 40
    },
    contact: {
      style: 'modern',
      maxWidth: 'lg',
      spacing: 6,
      boxed: true
    },
    newsletter: {
      style: 'split',
      maxWidth: 'md',
      spacing: 8,
      gradient: true
    },
    faq: {
      style: 'grid',
      maxWidth: 'lg',
      spacing: 6,
      columns: { xs: 1, sm: 2, md: 2 }
    },
    footer: {
      style: 'modern',
      spacing: 12,
      waves: true
    }
  }
}; 