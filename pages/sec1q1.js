export default function Sec1Q1 ({ data }) {
  const number1 = data.data
  const calculation = number1 * 10;
  console.log('calculation', calculation)
  return (
    <div>{calculation}</div>
  )
}

export async function getStaticProps(context) {
  const response = await fetch('https://codequiz.azurewebsites.net/data')
  const data = await response.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}