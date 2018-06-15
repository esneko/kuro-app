// import fetch from 'isomorphic-fetch'

const fetchJson = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url)
    const data = await res.json()

    return data
  } catch (e) {
    return e
  }
}

export default fetchJson
