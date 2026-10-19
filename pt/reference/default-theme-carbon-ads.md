---
description: Integre o Carbon Ads ao seu site Sapphire Rapids usando o suporte embutido do tema padrão.
---

# Carbon Ads {#carbon-ads}

Sapphire Rapids tem suporte embutido para [Carbon Ads](https://www.carbonads.net/). Ao definir as credenciais Carbon Ads na configuração, Sapphire Rapids mostrará anúncios na página.

```js
export default {
  themeConfig: {
    carbonAds: {
      code: 'seu-código-carbon',
      placement: 'sua-veiculação-carbon',
      format: 'classic'
    }
  }
}
```

Esses valores são usados para chamar o sript em CDN do carbon como mostrado abaixo.

A opção `format` aceita `classic`, `responsive` e `cover`.

```js
`//cdn.carbonads.com/carbon.js?serve=${code}&placement=${placement}&format=${format}`
```

Para aprender mais sobre a configuração Carbon Ads, por favor visite [Site Carbon Ads](https://www.carbonads.net/).
