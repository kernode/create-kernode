import Env from '@kernode/core/Env'
import { storagePath } from '@kernode/core/Helper'

export default {
  /** Storage */
  storage: {
    disk: Env.get('STORAGE_DISK', 'local'),

    adapters: {
      local: {
        folder: storagePath(),
      },
      s3: {
        id: Env.get('S3_ID'),
        secret: Env.get('S3_SECRET'),
        region: Env.get('S3_REGION'),
        folder: Env.get('S3_FOLDER'),
        bucket: Env.get('S3_BUCKET'),
      },
    },
  },
}
