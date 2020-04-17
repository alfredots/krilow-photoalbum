import axios from 'axios'
const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/)
 

export const fetchInstagramPhotos = async (accountUrl) => {

    
    const response = await axios.get(accountUrl)
    console.log(response)
    const json = JSON.parse(response.data.match(instagramRegExp)[1])
    const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 9)
    const photos = edges.map(({ node }) => {
        return {
            url: `https://www.instagram.com/p/${node.shortcode}/`,
            thumbnailUrl: node.thumbnail_src,
            displayUrl: node.display_url,
            caption: node.edge_media_to_caption.edges[0].node.text
        }
    })

    return photos
}
  