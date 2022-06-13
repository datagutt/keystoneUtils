/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { config } from "@keystone-6/core"

import { lists } from "./schema"

import { session, withAuth } from "./auth"

const url = process.env.DATABASE_URL || "file:./keystone.db"
const port = parseInt(process.env.PORT || "") || 3002
export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url,
    },
    ui: {
      isAccessAllowed: context => !!context.session?.data,
    },
    server: {
      port,
    },
    lists,
    session,
  }),
)
