const emailHider = async (token: string) =>
{
    return fetch(process.env.REACT_APP_API as string, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          site: process.env.REACT_APP_SITE,
        }),
      })
}

export default emailHider