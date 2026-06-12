import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function RouteComponent() {
  const navigate = useNavigate();
  const defaultEmail = "vsimms";
  const defaultPassword = "valerie1";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (email !== defaultEmail || password !== defaultPassword) {
      toast.error("Invalid credentials");
      return;
    }
    setLoading(true);
    localStorage.setItem("authenticated", "true");
    toast.success("Logged in successfully");
    setTimeout(() => navigate({ to: "/" }), 500);
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Brand / marketing panel */}
      <section className="relative hidden flex-col justify-between overflow-hidden bg-primary p-12 text-primary-foreground lg:flex lg:w-[45%]">
        <div className="relative z-10">
          <Logo />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight">
            Banking that moves at the speed of your life.
          </h1>
          <p className="max-w-sm text-pretty leading-relaxed text-primary-foreground/80">
            Track balances, send money, and stay in control — all secured with
            bank-grade encryption.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-primary-foreground/90">
              <ShieldCheck className="size-5 shrink-0" />
              256-bit end-to-end encryption
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/90">
              <Lock className="size-5 shrink-0" />
              FDIC insured up to $250,000
            </div>
          </div>
        </div>

        <p className="relative z-10 text-xs text-primary-foreground/60">
          {"© "}
          {new Date().getFullYear()} WEBank INC. All rights reserved.
        </p>

        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />
      </section>

      {/* Form panel */}
      <section className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>

          <div className="mb-8 space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-muted-foreground">
              Sign in to access your accounts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Username</Label>
              <Input
                id="email"
                autoComplete="username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button
                  variant="ghost"
                  onClick={() =>
                    toast.info(
                      "To reset your password, please contact the management.",
                    )
                  }
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Signing in…" : "Sign in"}
              {!loading && <ArrowRight className="size-4" />}
            </Button>
          </form>

          {/*<p className="mt-6 text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:underline"
            >
              Open one today
            </Link>
          </p>*/}
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const isAuthenticated = Boolean(localStorage.getItem("authenticated"));
    if (isAuthenticated) {
      throw redirect({
        to: "/",
        search: {
          // Save current location for redirect after login
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});
