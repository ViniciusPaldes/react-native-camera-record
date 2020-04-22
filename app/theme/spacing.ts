import { Dimensions } from "react-native"

/**
 * Espaçamentos definidos
 *
 * Utilizamos o espaçamento de 8 em 8, de 0 a 96. A exceção é o número 4.
 * Para usar coloque no seu arquivo presets spacing[INDICE], onde indice é o valor indicado abaixo
 *
 * 0  = nada    - nada, apenas 0 no espaçamento
 * 1  = minimo  - elementos que estão muito próximos que precisam de pouca distância
 * 2  = pequeno - geralmente para paddings internos e distância entre os itens de lista
 * 3  = tela    - usado para paddings padrões de todas as telas
 * 4  = medio   - usado para distâncias geralmente de bottom de listas para dar um espaço em branco na tela
 * 5  = ?       - ?
 * 6  = ?       - ?
 * 7  = ?       - ?
 * 8  = botao   - geralmente usado para botões que ficam fixos na parte de baixo da tela
 * 9  = ?       - ?
 * 10 = ?       - ?
 * 11 = ?       - ?
 * 12 = ?       - ?
 * 13 = ?       - ?
 * 14 = ?       - ?
 */
export const spacing = [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window")

/**
 *
 * @param percentage Calculate the percentage of size from a viewportWidth
 */
export const wp = percentage => {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}
