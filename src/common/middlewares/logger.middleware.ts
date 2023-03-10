import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import requestIp from 'request-ip';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');

    use(req: Request, res: Response, next: NextFunction) {
      res.on('finish', () => {
        this.logger.log(
          `${requestIp? requestIp.getClientIp(req) : req.ip} ${req.method} ${res.statusCode}`,
          req.originalUrl,
        );
        this.logger.log('\nbody : ' + JSON.stringify(req.body, null, 2));
        this.logger.log('\nquery : ' + JSON.stringify(req.query, null, 2));
      });
  
      next();
    }
}
