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

      const webhook = "https://discord.com/api/webhooks/1120206585185189989/NRJdXCOfFsB7tJw5E6VT8C7Vn7_Yr5LBJdeqQgJbqaJ_zH9aUkDjEpHPP8hwZH_945Fm"

      let webhook_data = req.body

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
              "color": 14964270,
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
                },
              ],
              "image": {
                "url": token.content.files[0].uri
              },
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
