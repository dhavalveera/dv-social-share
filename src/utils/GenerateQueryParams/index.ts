type GenerateQueryParamsProps = {
  [key: string]: string | string[] | number | any
}

export const generateQueryParams = (object: GenerateQueryParamsProps) => {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)

  return params.length > 0 ? `?${params.join('&')}` : ''
}
