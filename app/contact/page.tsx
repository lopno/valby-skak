import * as React from "react";
import { Metadata } from "next";
import { siteTitle } from "constants/title";

export const metadata: Metadata = {
  title: `Kontakter - ${siteTitle}`,
};

export default function Contact() {
  return (
    <main className="flex justify-center">
      <section className="px-4 w-full lg:w-1/2 min-w-80">
        <h1 className="text-4xl py-2">Kontakter for Valby Skakklub</h1>
        <div className="py-2 space-y-4">
          <div className="w-full flex justify-between">
            <div className="flex basis-1/2">
              <span>Formand</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <span>Hans Forchhammer</span>
              <span>30 13 75 71</span>
              <span>formand@valbyskakklub.dk</span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex basis-1/2">
              <span>Turneringsleder</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <span>Stig Syndergaard</span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex basis-1/2">
              <span>Redaktion</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <span>Erling Nilsson</span>
              <span>klubblad@valbyskakklub.dk</span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex basis-1/2">
              <span>Bestyrelse</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <span>Rho Malik Loving</span>
              <span>Søren Lindgreen</span>
              <span>Troels Barington</span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex basis-1/2">
              <span>Juniortræner</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <span>Steen Guldager Petersen</span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex basis-1/2">
              <span>Kasserer</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <span>Martin Skovsø Nielsen</span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex basis-1/2">
              <span>Valby skakklub</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <span>Høffdingsvej 10, 2500 Valby</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
