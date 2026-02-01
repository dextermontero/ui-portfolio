import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                {/* 404 Text */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-text-muted text-lg mb-8">
                        Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>
                </div>

                {/* Illustration */}
                <div className="mb-12 p-8 bg-surface rounded-2xl border border-border">
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-text-muted text-sm">
                        The page you requested could not be found
                    </p>
                </div>

                {/* Action Buttons */}
                    <div className="flex gap-4 flex-col sm:flex-row justify-center">
                    <Button
                        onClick={() => window.history.back()}
                        variant="outline"
                        className="flex items-center gap-2 w-full sm:w-auto cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center gap-2 w-full sm:w-auto bg-primary hover:bg-primary-dark cursor-pointer"
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Button>
                </div>

                {/* Footer Help Text */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-text-muted text-sm mb-3">
                        Need help? Contact us at:
                    </p>
                    <a
                        href="mailto:dexter.montero09@gmail.com"
                        className="text-accent hover:text-accent-secondary transition"
                    >
                        dexter.montero09@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}
