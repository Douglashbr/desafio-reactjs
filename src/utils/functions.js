export const calcDiffDays = (date) => {
  const update = new Date(date.split('T')[0])
  const today = new Date()

  const timeDiff = Math.abs(today.getTime() - update.getTime())
  return Math.ceil(timeDiff / (1000 * 3600 * 24))
}

export const compare = (x, y) => {
  return y.stargazers_count - x.stargazers_count
}

export const countStars = (repos) => {
  return repos.reduce((acumulator, current) => acumulator + current.stargazers_count, 0)
}