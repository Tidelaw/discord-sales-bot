const rpc = `https://rpc.helius.xyz/?api-key=${process.env.HELIUS_KEY}`

const getAsset = async (token: string) => {
  const response = await fetch(rpc, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAsset',
      params: {
        id: token
      },
    }),
  });
  const { result } = await response.json();
  return result;
};

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "POST") {

      const webhook: any = process.env.DISCORD_WEBHOOK

      let webhook_data = req.body

      console.log(webhook_data, 'e1')
      console.log(webhook_data[0].events.nft)
      console.log(webhook_data[0].events.nft.nfts[0])
      let token: any = await getAsset(webhook_data[0].events.nft.nfts[0].mint)

      const response = await fetch(webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          "content": null,
          "embeds": [
            {
              "title": token.content.metadata.name + " has sold!",
              "url": `https://solscan.io/token/${webhook_data[0].events.nft.nfts[0].mint}`,
              "color": 16486972,
              "fields": [
                {
                  "name": "\ ",
                  "value": "\ "
                },
                {
                  "name": "\ ",
                  "value": "\ "
                },
                {
                  "name": ":moneybag:  Sale Price",
                  "value": "**" + (webhook_data[0].events.nft.amount / 1000000000).toFixed(2) + " " + "SOL**",
                  "inline": true
                },
                {
                  "name": ":date:  Sale Date",
                  "value": `<t:${webhook_data[0].timestamp}:R>`,
                  "inline": true
                },
                {
                  "name": "\ ",
                  "value": "\ "
                },
                {
                  "name": "Buyer",
                  "value": webhook_data[0].events.nft.buyer.slice(0, 4) + '..' + webhook_data[0].events.nft.buyer.slice(-4),
                  "inline": true
                },
                {
                  "name": "Seller",
                  "value": webhook_data[0].events.nft.seller.slice(0, 4) + '..' + webhook_data[0].events.nft.seller.slice(-4),
                  "inline": true
                }
              ],
              "image": {
                "url": token.content.files[0].uri
              },
              timestamp: new Date().toISOString(),
              "footer": {
                  "text": "Helius",
                  "icon_url": "https://assets-global.website-files.com/641a8c4cac3aee8bd266fd58/642b5b2804ea37191a59737b_favicon-32x32.png",
              }
            }
          ],

        },
        ),
      });
      console.log(response)
      res.status(200).json("success")

    };

  }

  catch (err) { console.log(err) }

}
