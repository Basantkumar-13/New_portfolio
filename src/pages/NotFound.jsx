import { Link } from 'react-router-dom';
import { Home as HomeIcon, AlertCircle } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="glass-card p-8 md:p-12 text-center max-w-lg w-full space-y-6">
        <div className="w-14 h-14 rounded-pill bg-mint-100 text-mint-600 border border-mint-200 flex items-center justify-center mx-auto">
          <AlertCircle size={28} />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-white/70 text-text-muted-dark text-xs font-mono font-medium border border-white">
            ERROR 404
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-text-primary-dark">
            Route Not Found
          </h1>
          <p className="text-sm text-text-secondary-dark leading-relaxed">
            The requested view or system module does not exist in the portfolio matrix. Verify the route or return to the overview console.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Link to="/">
            <Button variant="primary" icon={HomeIcon}>
              Return to Overview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
