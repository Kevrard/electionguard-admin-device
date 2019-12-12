import { createContext } from 'react'
import { TallyContextInterface } from '../config/types'

const context: TallyContextInterface = {
  castIds: [],
  setCastIds: () => undefined,
  spoiledIds: [],
  setSpoiledIds: () => undefined,
  encryptedBallotPaths: [],
  addEncryptedBallotPath: () => undefined,
  trustees: [],
  setTrustees: () => undefined,
  announceTrustee: () => undefined,
  tally: [],
  setTally: () => undefined,
}

const TallyContext = createContext(context)

export default TallyContext
